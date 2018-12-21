var express = require('express');
var path = require('path');
var fs = require('fs');
var util = require('util');

var logger = require('./logger');
var act_10 = require('./act_10');

var state =
{
	act: 10,
	trust: 0
};

var is_dev = false;
var port = 80;
if (is_dev)
	port = 3000;

logger.log_clear();

// Load 'synonyms.json'.
var synonyms = {};
{
	var json_syn = fs.readFileSync('synonyms.json');
	logger.log("Synonyms JSON:\n" + json_syn);

	synonyms = JSON.parse(json_syn);
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

	var text = req.query.text.toLowerCase();
	var reply =
	{
		success: false
	};

	if(!text)
	{
		logger.log("\tQuery 'text' not set");
		logger.log("\tRequest aborted");

		reply.error = "Query 'text' not set. Request aborted.";

		res.send(reply);
		return;
	}

	logger.log("\tQuery 'text': " + text);

	text = parse_pass_1(text);

	logger.log("\tParse Pass 1 'text': " + text);

	text = parse_pass_2(text);

	logger.log("\tParse Pass 2 'text': " + text);

	switch (text)
	{
		case 'system test':
			reply.text = '[rp_a0_0]system is functional';
			break;
		case 'system check':
			reply.text = '[rp_a0_0]system is functional';
			break;
		case 'howdy':
			reply.text = '[rp_a0_99]Hey there cowboy';
			break;
		default:
			reply.text = process(text);
			break;
	}

	logger.log("\tReply: " + reply.text);
	reply.success = true;
	res.send(reply);
});

// Start the server
var server = app.listen(port, function()
{
	logger.log('Server live');
	logger.log('Listening on port %d', server.address().port);
});


function parse_pass_1(text)
{
	return synonym_sub(text);
}

function parse_pass_2(text)
{
	return synonym_sub(text);
}

function process(text)
{
	switch (state.act)
	{
		case 10:
			state = act_10.process(state, text);
			return state.reply;
		default:
			return '[No Intent Matched] ' + text;
	}
}


function synonym_sub(text)
{
	for (var key in synonyms)
	{
		var value = synonyms[key];
		text = text.replace(key, value);
	}

	return text;
}