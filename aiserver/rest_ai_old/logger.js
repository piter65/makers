var fs = require('fs');
var util = require('util');

const log_path = '/debug.log';

var is_logging = false;
var log_buffer = [];

// Setup file logging.
// var logger.log_file = fs.createWriteStream(__dirname + '/debug.logger.log', {flags : 'w'});
// var logger.log_stdout = process.stdout;

exports.log_clear = function()
{
	fs.writeFileSync(__dirname + log_path, '');
}

exports.log = function(d)
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