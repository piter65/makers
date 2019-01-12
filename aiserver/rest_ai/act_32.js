var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');

// Ok, this is the gluten free act.  The AI just decided on sausage and mushroom.   Wish us luck....


exports.process = function(state)
{


	if (state.result.tokens.includes('i_nogluten'))
	{
		state.session.glutten_known=1;
		if (state.session.next_act>30)  // move on!
		{
			state.result.code = 'rp_32_decided_nogluten'; // state"A no gluten option?Lets do that! "
			state.session.act = state.session.next_act;  // move on!
			state.session.score_exec++;
			state.session.gluten_solved++;

		}
		else		// go back to level 20/22/24
		{
			state.result.code = 'rp_32_nogluten_undecided'; //"A no gluten option? what about my toppings?"
			state.session.act = state.session.next_act;  // move on!
		}
	}
	else
	if (   state.result.tokens.includes('i_nopizza')
		|| state.result.tokens.includes( 'i_5sec')
		|| state.result.tokens.includes( 'e_rude'))
	{
		state.result.code = 'rp_32_fed_up';
		// state.result.reply ="I guess this was a bad idea.  Thanks for your time."
		state.session.score_empathy = 0;
		state.session.score_exec -= 2;

		state.session.game_over = true;
	}
	else
	{
		act_990.process(state);
	}


	
	logger.log('ACT 32 - processed');
};