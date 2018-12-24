var logger = require('./logger');
var act_990 = require('./act_990');

exports.process = function(state)
{
	// logger.log('ACT 10 - start');

	if (true)
	{
		{
			state.result.code = 'rp_20_00';
			state.result.reply = 'You made it act 20! Whoooo!';
			state.result.direction = 'happy';
			state.session.trust += 10;
		}
	}
	else
	{
		state = act_990.process(state);
	}

	logger.log('ACT 20 - processed');


	return state;
};