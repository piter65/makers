const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const _ = require('underscore');
const uuid_by_timestamp = require('uuid/v1')
const strReplaceAll = require('str-replace-all')
const decoder = require('./decoder');


const state_templates = require('./state_templates');
const logger = require('./logger');
const nlu = require('./nlu');
const act_10 = require('./act_10');
const act_20 = require('./act_20');
const act_22 = require('./act_22');
const act_24 = require('./act_24');

const act_30 = require('./act_30');
const act_32 = require('./act_32');
const act_40 = require('./act_40');
const act_980 = require('./act_980');

// This function will work so long as 'obj' 
//   does not contain any cyclic references.
function deepClone(obj)
{
	return JSON.parse(JSON.stringify(obj));
}

// Start server with empty object of sessions.
var sessions = {};

var is_dev = false;
var port = 80;
if (is_dev)
	port = 3000;

logger.log_clear();
logger.log("did clear ");


const subs_1 = JSON.parse(fs.readFileSync('subs_1.json'));
const subs_2 = JSON.parse(fs.readFileSync('subs_2.json'));
const subs_3 = JSON.parse(fs.readFileSync('subs_3.json'));
const subs_4 = JSON.parse(fs.readFileSync('subs_4.json'));


const app = express();

app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname + '/index.html'));

	logger.log("sending index pa ");
});

// Creates a new session and sends back the session ID.
app.get('/ai/start-session', function(req, res)
{
	logger.log("Get request for '/ai/start-session' received:");

	logger.log("query: " + JSON.stringify(req.query));

	// Create a new session ID based on timestamp.
	//   We shouldn't have conflicts because node 
	//   is single threaded by default.
	const id_session = uuid_by_timestamp();
	var state = {};

	// Save the new session's blank state by the session ID.
	sessions[id_session] = state;

	logger.log("Session generated. ID: %s", id_session);

	// Send back the session ID to the client.
	res.set('Access-Control-Allow-Origin', '*');
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
	state.result.text = ' ' + state.result.text_origin + ' ';

	if(!state.result.text)
	{
		logger.log("\tQuery 'text' not set");
		logger.log("\tRequest aborted");

		state.result.error = "Query 'text' not set. Request aborted.";

		res.send(state.result);
		return;
	}

	logger.log("_story_Player: '%s'", state.result.text_origin);

	sub_pass(state, subs_1);
	logger.log("\tSub Pass 1 'text': '%s'", state.result.text);
	state.result.text_1 = state.result.text;

	sub_pass(state, subs_2);
	logger.log("\tSub Pass 2 'text': '%s'", state.result.text);
	state.result.text_2 = state.result.text;


	sub_pass(state, subs_3);
	logger.log("\tSub Pass 3 'text': '%s'", state.result.text);
	state.result.text_3 = state.result.text;

	sub_pass(state, subs_4);
	logger.log("\tSub Pass 4 'text': '%s'", state.result.text);
	// state.result.text_4 = state.result.text;

	
	// Extract intent and entities.
	nlu.process(state);

	var save_state = false;
	switch (state.result.text_origin)
	{
		case 'system restart':
		case 'system new game':
		case 'system newgame':
		case 'newgame':
		case 'new game':
			// Reset the session.
			state.session = deepClone(state_templates.session_defaults);
			save_state = true;

			state.result.code = "rp_5_intro";
		// Decode the reply.
			state.result.reply = decoder.decode_reply(state.result.code);		
			break;
		case 'system test':
		case 'system check':
			state.result.code = 'rp_0_check';
			state.result.reply = state.result.code+':system is functional';
			break;
		case 'system state':
		case 'system last':
			state.result.code = 'rp_0_state';
			state.result.reply = state.result.code+':ACT:'+state.session.act+'\n';
			state.result.reply += JSON.stringify(state_prev, null, 4);
			break;

		case 'system score':
			state.result.code = 'rp_0_score';

			state.result.reply += 'Executive Score:'+state.session.score_exec+'\n';
			state.result.reply += 'Active Listening:'+state.session.score_listen+'\n';
			state.result.reply += 'Understanding:'+state.session.score_understand+'\n';
			state.result.reply += 'Empathy:'+state.session.score_empathy+'\n';
			break;




		case 'ibjeff':
			state.result.code = 'rp_0_ibjeff';
			state.result.reply = state.result.code+':ACT:'+state.session.act+'\n';
			state.result.reply += '"'+state_prev.result.text_1+'"\n';
			state.result.reply += '"'+state_prev.result.text_2+'"\n';
			state.result.reply += state_prev.result.tokens[0]+'\n';
			state.result.reply += state_prev.result.tokens[1]+'\n';
			state.result.reply += state_prev.result.tokens[2]+'\n';
			state.result.reply += state_prev.result.tokens[3]+'\n';
			break;



		case 'howdy':
			state.result.code = 'rp_0_howdy';
			state.result.reply = state.result.code+':Hey there cowboy';
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

	res.set('Access-Control-Allow-Origin', '*');
	res.send(state.result);
});

// Start the server
var server = app.listen(port, function()
{
	logger.log('Server live');
	logger.log('Listening on port %d', server.address().port);
});


function sub_pass(state, subs)
{
	for (var key in subs)
	{
		var value = subs[key];
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

	act_980.process(state);		// do commmon scoring...


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
		case 24:
			act_24.process(state);
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
	// Decode the reply.
	state.result.reply = decoder.decode_reply(state.result.code);

	if (state.session.game_over)
	{

			state.result.reply += '\n\n-GAME OVER-\n-';
			state.result.reply += 'Executive Score:'+state.session.score_exec+'\n';
			state.result.reply += 'Active Listening:'+state.session.score_listen+'\n';
			state.result.reply += 'Understanding:'+state.session.score_understand+'\n';
			state.result.reply += 'Empathy:'+state.session.score_empathy+'\n';
			state.result.reply += '\n try "newgame" to play again\n';

	}

}