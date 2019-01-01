var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');

// Ok, this is the gluten free act.  The AI just decided on sausage and mushroom.   Wish us luck....


exports.process = function(state)
{
   logger.log('ACT 32 - start after christmas');


	if (state.result.tokens.includes('i_nogluten'))
	{
		state.result.code = 'rp_32_decided_nogluten';
		// state.result.reply = "A no gluten option? Oh, that's fantastic.  Lets do that!  Can you write up my order?"
		state.session.act = 40;  // move on!
	}
	else
	if (   state.result.tokens.includes('i_nopizza')
		|| state.result.tokens.includes( 'i_5sec')
		|| state.result.tokens.includes( 'e_rude'))
	{
		state.result.code = 'rp_32_fed_up';
		// state.result.reply ="I guess this was a bad idea.  Thanks for your time."
		state.session.trust += -3;
		state.session.game_over = true;
	}
	else
	{
		act_990.process(state);
	}

	// Decode the reply.
	state.result.reply = decoder.decode_reply(state.result.code);
	
	logger.log('ACT 32 - processed');
};