var logger = require('./logger');

exports.process = function(state, text)
{
	// logger.log('ACT 10 - start');

	if (   text.includes('greet')
		|| text.includes('hello'))
	{
		state.reply = 'intent: greeting';
	}
	else
	{
		state.reply = text;
	}

	logger.log('ACT 10 - processed: ' + text);


	return state;
};