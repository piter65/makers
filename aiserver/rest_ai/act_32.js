var logger = require('./logger');
var act_990 = require('./act_990');

// Ok, this is the gluten free act.  The AI just decided on sausage and mushroom.   Wish us luck....


exports.process = function(state)
{
   logger.log('ACT 32 - start after christmas');


 	if (state.result.entities.includes('e_noglut')
 		)
   	{
			state.result.code = 'rp_32_99';
			state.result.reply =
			"A no gluten option? Oh, that's fantastic.  Lets do that!  Can you write up my order?"
			state.session.act = 40;  // move on!
   	}

   	else
 	if (state.result.entities.includes('i_nopizza') 
 		    ||
 		state.result.entities.includes( 'i_5sec')
 		    ||
 		state.result.entities.includes( 'e_rude')		    
 		)
   	{
			state.result.code = 'rp_32_99';
			state.result.reply ="I guess this was a bad idea.  Thanks for your time."
			state.session.trust += -3;
			state.session.game_over = true;
   	}

	else
	{
		state = act_990.process(state);
	}
	logger.log('ACT 32 - processed');


	return state;
};