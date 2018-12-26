var logger = require('./logger');
var act_990 = require('./act_990');

// Ok, this is the gluten free act.  The AI just decided on sausage and mushroom.   Wish us luck....


exports.process = function(state)
{
   logger.log('ACT 32 - start');


 	if (state.result.entities.includes('e_noglutten')
 					||
 				(true)


 		)
   	{
			state.result.code = 'rp_32_00';
			state.result.reply =
			"A no gluten option? Oh, that's fantastic.  Lets do that!  Can you write up my order?"
			state.session.act = 40;  // move on!
   	}


	else
	{
		state = act_990.process(state);
	}
	logger.log('ACT 32 - processed');


	return state;
};