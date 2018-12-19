var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/ai', function(req, res)
{
	console.log("Get request for '/ai' received:")

	console.log("query: " + JSON.stringify(req.query));

	var text = req.query.text;
	var reply = '';

	if(!text)
	{
		console.log("\tQuery 'text' not set");
		console.log("\tRequest aborted");

		res.send(reply);
		return;
	}

	console.log("\tQuery 'text': " + text);

	text = synonym_sub(text);

	console.log("\tSynonym 'text': " + text);

	switch (text)
	{
		case 'system test':
			reply = '[rp_a0_0]system is functional';
			break;
		case 'system check':
			reply = '[rp_a0_0]system is functional';
			break;
		case 'howdy':
			reply = '[rp_a0_99]Hey there cowboy';
			break;
		default:
			reply = text;
			break;
	}

	console.log("\tReply: " + reply);
	res.send(reply);
});

// Start the server
var server = app.listen(80, function()
{ 
	console.log('Server live');
	console.log('Listening on port %d', server.address().port);
});

function synonym_sub(text)
{
	var json_syn = fs.readFileSync('synonyms.json');

	console.log("JSON:\n" + json_syn);

	var synonyms = JSON.parse(json_syn);

	for (var key in synonyms)
	{
		var value = synonyms[key];
		text = text.replace(key, value);
	}

	return text;
}