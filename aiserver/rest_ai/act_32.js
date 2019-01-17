var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');
const f = require('./func');

// Ok, this is the gluten free act.  The AI just decided on sausage and mushroom.   Wish us luck....


exports.process = function(state)
{

	if (state.result.tokens.includes('i_nogluten'))
	{
			state.result.code = 'rp_32_decided_nogluten'; // state"A no gluten option?Lets do that! "
			state.session.act = 40;  // move on!
			state.session.score_exec++;
			state.session.gluten_saga=4;		// just tag it was force solved for now
	}
	else if ( state.result.tokens.includes( 'i_5sec')	)
	{
		state.result.code = 'rp_30_pizza_bad_idea';
		// state.result.reply ="I guess this was a bad idea.  Thanks for your time."
		state.session.score_empathy = 0;
		state.session.score_exec -= 1;
	}
	else if (f.includesAny(state.result.tokens,'e_shock','e_empathy','e_nofun'))
	{
		state.result.code = 'rp_3_gluten_uncle';
		state.session.score_understand++;
		state.session.score_listen++;	
	}
	else if (f.includesAny(state.result.tokens, 'i_why') /* what do you think it was?  */ )
	{
		state.result.code = 'rp_3_gluten_uncle';
		state.session.score_understand++;
		state.session.score_listen++;	
	}
	else if (f.includesAny(state.result.tokens,'i_nopizza','i_9sec','e_rude'))
	{
		state.result.code = 'rp_32_fed_up';     // "I guess this was a bad idea.  Thanks for your time."
		state.session.score_empathy = 0;
		state.session.score_exec -= 2;

		state.session.game_over = true;
	}
/*
	else
	{
		act_990.process(state);
	}
*/

	
	logger.log('ACT 32 - processed');
};