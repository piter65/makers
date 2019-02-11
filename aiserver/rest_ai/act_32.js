var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');
const f = require('./func');

// Ok, this is the gluten free act.  The AI just decided on sausage and mushroom.   Wish us luck....

exports.process = function(state)
{

	if (state.result.tokens.includes('e_nogluten'))
	{
			state.result.code = 'rp_3_decided_nogluten'; // state"A no gluten option?Lets do that! "
			state.session.act = 40;  // move on!
			state.session.score_exec++;
			state.session.gluten_saga=5;		// just tag it was force solved for now
			state.session.score_overcome += 2;		// failing overcoming objections...
	}

	else if ( state.result.tokens.includes( 'i_5sec')	)
	{
		state.result.code = 'rp_3_pizza_bad_idea';
		// state.result.reply ="I guess this was a bad idea.  Thanks for your time."
		state.session.score_empathy = 0;
		state.session.score_exec -= 1;
		state.session.score_overcome -= 2;		// failing overcoming objections...
	}
	else if ( (state.session.gluten_saga<3)
		  &&
	 (f.includesAny(state.result.tokens,'e_shock','e_empathy','e_nofun','i_sorry','i_why','e_gluten')))
	{
		state.result.code = 'rp_3_gluten_uncle';
		state.session.empathy_opportunity=true;   // looking for sorry
		state.session.score_discovery++;
		state.session.score_listen++;	
		state.session.gluten_saga=3;		// move it up
	}

	else if ( (state.session.gluten_saga==3)
		  &&
	 (f.includesAny(state.result.tokens,'e_shock','e_empathy','e_nofun','i_sorry','i_why','e_gluten')))
	{
		state.result.code = 'rp_1_thank_you';
		state.session.empathy_opportunity=true;   // looking for sorry
		state.session.score_discovery++;
		state.session.score_listen++;	
		state.session.gluten_saga=4;		// move it up
	}

	else if (
				f.includesAny(state.result.tokens,'i_nopizza','i_9sec','e_rude')
					||
				(state.session.gluten_crisis>0)
		)
	{
		state.result.code = 'rp_go_fed_up';     // "I guess this was a bad idea.  Thanks for your time."
		state.session.score_empathy = 0;
		state.session.score_exec -= 2;
		state.session.score_overcome = 0,		// failed overcoming objections...

		state.session.game_over = true;
	}

	else if (state.result.tokens.length > 0)	// pretty much anything else...
	{
		state.result.code = 'rp_3_pizza_bad_idea';     // "I guess this was a bad idea.  Thanks for your time."
		state.session.score_empathy = 0;
		state.session.score_exec -= 2;
		state.session.gluten_crisis ++;   // this is gonna end -- soon...
	}

/*
	else
	{
		act_990.process(state);
	}
*/
	
	logger.log('ACT 32 - processed');
};