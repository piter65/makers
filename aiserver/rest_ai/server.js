var express = require('express');
var path = require('path');
var fs = require('fs');
var util = require('util');

var log_path = '/debug.log';
var is_dev = true;

var is_logging = false;
var log_buffer = [];

var port = 80;
if (is_dev)
	port = 3000;

// Setup file logging.
// var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
// var log_stdout = process.stdout;

function log_clear()
{
	fs.writeFileSync(__dirname + log_path, '');
}

function log(d)
{
	var message = util.format.apply(d, arguments);

	// Logs to file 'debug.log'.
	// var file_stream = fs.createWriteStream(__dirname + log_path, {flags : 'a'});
	// file_stream.write(util.format.apply(d, arguments) + '\n');
	// file_stream.end();

	if (is_logging)
	{
		log_buffer.push(message)
	}
	else
	{
		// is_logging = true;



		// Logs to console.
		// process.stdout.write(message + '\n');
		console.log(message);



		// fs.appendFile(__dirname + log_path, message + '\n', (err) =>
		// {
		// 	if (err)
		// 		throw err;

		// 	is_logging = false;

		// 	// If we have buffered messages, pop one out now.
		// 	if (log_buffer.length > 0)
		// 	{
		// 		var message = log_buffer.splice(0, 1)[0];
		// 		log(message);
		// 	}
		// });
	}
};


log_clear();

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

	var text = req.query.text.toLowerCase();
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

	text = parse_pass_1(text);

	log("\tParse Pass 1 'text': " + text);

	text = parse_pass_2(text);

	log("\tParse Pass 2 'text': " + text);

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
var server = app.listen(port, function()
{
	log('Server live');
	log('Listening on port %d', server.address().port);
});


function parse_pass_1(text)
{
	return synonym_sub(text);
}

function parse_pass_2(text)
{
	return synonym_sub(text);
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