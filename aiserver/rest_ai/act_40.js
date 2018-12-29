var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');

// Ok, close the deal.  Ideally player repeats order


exports.process = function(state)
{
	logger.log('ACT 40 - start pa');

	if ( true )
	{
		logger.log('ACT 40 - perfect');

		state.result.code = 'rp_40_99_finished';
		// state.result.reply = "Perfect.  I have to say I'm very pleased with the service here at Paizanos!";
		state.session.trust += 4;
		state.session.game_over = true;
		logger.log('ACT 40 - gameover = set');
	}

/*
	if ( 
		state.result.tokens.includes('e_noglut') &&
		state.result.tokens.includes('e_sausage') &&
		state.result.tokens.includes('e_mushroom')
		)
	{

		   logger.log('ACT 40 - perfect');

			state.result.code = 'rp_40_99';
			state.result.reply =
			"Perfect.  I have to say I'm very pleased with the service here at Paizanos!";
			state.session.trust += 4;
			state.session.game_over = true;
			logger.log('ACT 40 - gameover = set');
	}

	else
	if (
		state.result.tokens.includes('e_sausage') &&
		state.result.tokens.includes('e_mushroom')
		)
	{
			state.result.code = 'rp_40_99';
			state.result.reply ="Don't forget glutten free.  Please write that down and read it all back to me.";
			state.session.trust += -1;
	}
	else
	{
		act_990.process(state);
	}
	logger.log('ACT 40 - processed');
*/

	// Decode the reply.
	state.result.reply = decoder.decode_reply(state.result.code);
};