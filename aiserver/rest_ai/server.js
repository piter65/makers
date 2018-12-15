var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/ai', function(req, res)
{
	console.log("Get request for '/ai' received:")

	console.log("query: " + JSON.stringify(req.query));

	var command = req.query.command;
	var reply = '';

	if(!command)
	{
		console.log("\tQuery 'command' not set");
		console.log("\tRequest aborted");

		res.send(reply);
		return;
	}

	console.log("\tQuery 'command': " + command);

	switch (command)
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
			reply = command;
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