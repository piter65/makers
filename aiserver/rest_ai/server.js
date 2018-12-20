var express = require('express');
var path = require('path');
var fs = require('fs');
var util = require('util');

// Setup file logging.
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

function log(d)
{
	// Logs to file 'debug.log'.
	log_file.write(util.format.apply(d, arguments) + '\n');

	// Logs to console.
	log_stdout.write(util.format.apply(d, arguments) + '\n');
};

// Load 'synonyms.json'.
var synonyms = {};
{
	var json_syn = fs.readFileSync('synonyms.json');
	log("Synonyms JSON:\n" + json_syn);

	synonyms = JSON.parse(json_syn);
}


var app = express();

app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/ai', function(req, res)
{
	log("Get request for '/ai' received:")

	log("query: " + JSON.stringify(req.query));

	var text = req.query.text;
	var reply =
	{
		success: false
	};

	if(!text)
	{
		log("\tQuery 'text' not set");
		log("\tRequest aborted");

		reply.error = "Query 'text' not set. Request aborted.";

		res.send(reply);
		return;
	}

	log("\tQuery 'text': " + text);

	text = synonym_sub(text);

	log("\tSynonym 'text': " + text);

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
			reply.text = text;
			break;
	}

	log("\tReply: " + reply.text);
	reply.success = true;
	res.send(reply);
});

// Start the server
var server = app.listen(80, function()
{ 
	log('Server live');
	log('Listening on port %d', server.address().port);
});

function synonym_sub(text)
{
	for (var key in synonyms)
	{
		var value = synonyms[key];
		text = text.replace(key, value);
	}

	return text;
}