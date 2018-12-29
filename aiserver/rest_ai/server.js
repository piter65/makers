const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const _ = require('underscore');
const uuid_by_timestamp = require('uuid/v1')
const strReplaceAll = require('str-replace-all')

const state_templates = require('./state_templates');
const logger = require('./logger');
const nlu = require('./nlu');
const act_10 = require('./act_10');
const act_20 = require('./act_20');
const act_22 = require('./act_22');
const act_30 = require('./act_30');
const act_32 = require('./act_32');
const act_40 = require('./act_40');

// This function will work so long as 'obj' 
//   does not contain any cyclic references.
function deepClone(obj)
{
	return JSON.parse(JSON.stringify(obj));
}

var sessions = {};

var is_dev = false;
var port = 80;
if (is_dev)
	port = 3000;

logger.log_clear();

// Load 'synonyms.json'.
var synonyms = {};
{
	var json = fs.readFileSync('syn1.json');
	//logger.log("Synonyms JSON:\n" + json);

	synonyms = JSON.parse(json);
}

// // Load 'intents.json'.
// var intents = {};
// {
// 	var json = fs.readFileSync('intents.json');
// 	//logger.log("Intents JSON:\n" + json);

// 	intents = JSON.parse(json);
// }


var app = express();

app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/ai/start-session', function(req, res)
{
	logger.log("Get request for '/ai/start-session' received:");

	logger.log("query: " + JSON.stringify(req.query));

	const id_session = uuid_by_timestamp();
	var state = {};

	sessions[id_session] = state;

	logger.log("Session generated. ID: %s", id_session);

	res.send(id_session);
});

app.get('/ai', function(req, res)
{
	logger.log("Get request for '/ai' received:")

	logger.log("query: " + JSON.stringify(req.query));

	const id_session = req.query.id_session;


	if(!id_session)
	{
		logger.log("\tQuery 'id_session' not set");
		logger.log("\tRequest aborted");

		var result = 
		{
			success: false,
		};
		result.error = "Query 'id_session' not set. Request aborted.";

		res.send(result);
		return;
	}

	const state_prev = sessions[id_session];
	if(!state_prev)
	{
		logger.log("\tSession does not exist with the ID: $s", id_session);
		logger.log("\tRequest aborted");

		var result = 
		{
			success: false,
		};
		result.error = "Session does not exist with the ID: " + id_session
		result.error += ". \nMake a request to /ai/start-session to generate a new session ID.";

		res.send(result);
		return;
	}

	// If the session data is unset, initialize 
	//   it with the default session data.
	const state = deepClone(state_prev);
	if (!state.session)
		state.session = deepClone(state_templates.session_defaults);

	// Reset the state's result data.
	state.result = deepClone(state_templates.result_defaults);
	logger.log("\tResult - Start: \n" + JSON.stringify(state.result, null, 4));

	state.result.text_origin = req.query.text.toLowerCase();
	state.result.text = state.result.text_origin;

	if(!state.result.text)
	{
		logger.log("\tQuery 'text' not set");
		logger.log("\tRequest aborted");

		state.result.error = "Query 'text' not set. Request aborted.";

		res.send(state.result);
		return;
	}

	logger.log("_story_Player:'"+state.result.text_origin+"'")
	// logger.log("\tQuery 'text': " + state.result.text);

	parse_pass_1(state);
	logger.log("\tParse Pass 1 'text': " + state.result.text);

	// parse_pass_2(state);
	// logger.log("\tParse Pass 2 'text': " + state.result.text);

	// Extract intent and entities.
	nlu.process(state);

	var save_state = false;
	switch (state.result.text)
	{
		case 'system restart':
		case 'system new game':
		case 'system newgame':
		case 'newgame':
			// Reset the session.
			state.session = deepClone(state_templates.session_defaults);
			state.result.code = 'rp_0_10';
			state.result.reply = 
				"new game started\nHi. I Great looking uniform you got.";
			break;
		case 'system test':
		case 'system check':
			state.result.code = 'rp_0_0';
			state.result.reply = 'system is functional';
			break;
		case 'system state':
			state.result.code = 'rp_0_0';
			state.result.reply = 'ACT:'+state.session.act+'\n';
			state.result.reply += JSON.stringify(state_prev, null, 4);
			break;
		case 'howdy':
			state.result.code = 'rp_0_99';
			state.result.reply = 'Hey there cowboy';
			break;
		default:
			process(state);
			save_state = true;
			break;
	}

	state.result.success = true;

	// Save a current state if we're flagged to do so.
	if (save_state)
		sessions[id_session] = state;

	logger.log("\tResult: \n" + JSON.stringify(state.result, null, 4));
	logger.log("_story_AI:'"+state.result.reply+"'");

	res.send(state.result);
});

// Start the server
var server = app.listen(port, function()
{
	logger.log('Server live');
	logger.log('Listening on port %d', server.address().port);
});


function parse_pass_1(state)
{
	for (var key in synonyms)
	{
		var value = synonyms[key];
		state.result.text = state.result.text.replace(key, value);
		state.result.text = strReplaceAll(key, value, state.result.text);
	}
}

// function parse_pass_2(state)
// {
// 	for (var key in intents)
// 	{
// 		var value = intents[key];
// 		state.result.text = state.result.text.replace(key, value);
// 	}
// }

function process(state)
{

	logger.log('gonna process:'+state.session.act);
	switch (state.session.act)
	{
		case 10:
			act_10.process(state);
			break;
		case 20:
			act_20.process(state);
			break;
		case 22:
			act_22.process(state);
			break;
		case 30:
			act_30.process(state);
			break;
		case 32:
			act_32.process(state);
			break;
		case 40:
			act_40.process(state);
			break;

		default:
			state.result.error = 'Act Out of Range';
			break;
	}
}