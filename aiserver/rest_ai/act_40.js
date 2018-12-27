var logger = require('./logger');
var act_990 = require('./act_990');

// Ok, close the deal.  Ideally player repeats order


exports.process = function(state)
{
   logger.log('ACT 40 - start');


 	if ( ( state.result.entities.includes('e_noglut') &&
 		state.result.entities.includes('e_sausage') &&
 		state.result.entities.includes('e_mushroom')
 		)
   	{
			state.result.code = 'rp_40_99';
			state.result.reply =
			"Perfect.  I have to say I'm very pleased with the service here at Paizanos!"
			state.session.trust += 4;
			state.session.game_over = true;
   	}

   	else
 	if (
 		state.result.entities.includes('e_sausage') &&
 		state.result.entities.includes('e_mushroom')
 		)
   	{
			state.result.code = 'rp_40_99';
			state.result.reply ="Don't forget glutten free.  Please write that down and read it all back to me."
			state.session.trust += -1;
			state.session.game_over = true;
   	}




	else
	{
		state = act_990.process(state);
	}
	logger.log('ACT 40 - processed');


	return state;
};