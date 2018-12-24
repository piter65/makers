var logger = require('./logger');
var act_990 = require('./act_990');

exports.process = function(state)
{
   logger.log('ACT 22 - start');

	if (true)
	{
		{
			state.result.code = 'rp_22_00';
			state.result.reply = 'You made it act 22! Your halfway there!";
			state.session.trust += 10;
		}
	}


	else
	{
		state = act_990.process(state);
	}

	logger.log('ACT 22 - processed');


	return state;
};