const fs = require('fs');
const util = require('util');

const log_path = '/debug.log';

exports.mute = false;

exports.setMute = function(val)
{
	this.mute = val;
}

exports.log_clear = function()
{
	fs.writeFileSync(__dirname + log_path, '');
}

exports.log = function(d)
{
	let self = this;

	// If the logger is unmuted, log to console.
	if (self.mute == false)
	{
		let message = util.format.apply(d, arguments);
		// let message = util.format("Mute: %s | ", self.mute) + util.format.apply(d, arguments);

		// Logs to console.
		console.log(message);
	}
};