var express = require('express');
var path = require('path');
var fs = require('fs');
var util = require('util');
var _ = require('underscore');

var state_templates = require('./state_templates');
var logger = require('./logger');
var nlu = require('./nlu');
var act_10 = require('./act_10');
var act_20 = require('./act_20');
var act_22 = require('./act_22');
var act_30 = require('./act_30');
var act_32 = require('./act_32');



// var state =
// {
// 	intents: [],
// 	entities: [],
// 	direction: null,
// 	act: 10,
// 	trust: 0,
// 	count_compliment_dress: 0,
// 	count_insult: 0,
// };

var state = {};

var is_dev = false;
var port = 80;
if (is_dev)
	port = 3000;

logger.log_clear();

// Load 'synonyms.json'.
var synonyms = {};
{
	var json = fs.readFileSync('syn1.json');
// skip says peter	logger.log("Synonyms JSON:\n" + json);

	synonyms = JSON.parse(json);
}

// Load 'intents.json'.
var intents = {};
{
	var json = fs.readFileSync('intents.json');
// skip says peter	logger.log("Intents JSON:\n" + json);

	intents = JSON.parse(json);
}


var app = express();

app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/ai', function(req, res)
{
	logger.log("Get request for '/ai' received:")

	logger.log("query: " + JSON.stringify(req.query));

	// If the state is unset, initialize 
	//   it with the default session data.
	if (!state.session)
		state.session = _.clone(state_templates.session_defaults);

	// Reset the state's result data.
	state.result = _.clone(state_templates.result_defaults);
	logger.log("\tResult - Start: \n" + JSON.stringify(state.result, null, 4));

	state.result.entities=[];		// peter was here.  BC double check

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
//	logger.log("\tQuery 'text': " + state.result.text);

	parse_pass_1(state);

	logger.log("\tParse Pass 1 'text': " + state.result.text);

	parse_pass_2(state);

	logger.log("\tParse Pass 2 'text': " + state.result.text);

	// Extract intent and entities.
	nlu.process(state);

	switch (state.result.text)
	{
		case 'system restart':
		case 'system new game':
		case 'system newgame':
		case 'newgame':
			// Reset the session.
			state.session = _.clone(state_templates.session_defaults);
// Brent, I'm assuming the line above resets defaults?
// Looks like entities list is not always reset...



			state.result.code = 'rp_0_10';
			state.result.reply = 'new game started\nHi.  Great looking uniform you got.';
			break;
		case 'system test':
		case 'system check':
			state.result.code = 'rp_0_0';
			state.result.reply = 'system is functional';
			break;
		case 'howdy':
			state.result.code = 'rp_0_99';
			state.result.reply = 'Hey there cowboy';
			break;
		default:
			state = process(state);
			break;
	}

	logger.log("\tResult: \n" + JSON.stringify(state.result, null, 4));
	logger.log("_story_AI:'"+state.result.reply+"'");


	state.result.success = true;
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
	}

	return state;
}

function parse_pass_2(state)
{
	for (var key in intents)
	{
		var value = intents[key];
		state.result.text = state.result.text.replace(key, value);
	}

	return state;
}

function process(state)
{
	switch (state.session.act)
	{
		case 10:
			state = act_10.process(state);
			break;
		case 20:
			state = act_20.process(state);
			break;
		case 22:
			state = act_22.process(state);
			break;
		case 30:
			state = act_30.process(state);
			break;
		case 32:
			state = act_32.process(state);
			break;



		default:
			state.result.error = 'Act Out of Range';
			break;
	}

	return state;
}