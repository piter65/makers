var logger = require('./logger');
var act_990 = require('./act_990');

exports.process = function(state, text)
{
	// logger.log('ACT 10 - start');

	if (text.includes('greet'))
	{
		state.intent = 'greet';
		state.reply = 'intent: greeting';
	}
	else
	{
		state = act_990.process(state, text);
	}

	logger.log('ACT 10 - processed: ' + state.reply);


	return state;
};