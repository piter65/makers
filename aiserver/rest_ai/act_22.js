var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');
const f = require('./func');

// In this act, the AI has decided on the sausage, but is not sure of the veggie.


exports.process = function(state)
{
	logger.log('ACT 22 - start');

	if (   state.result.tokens.includes('e_mushroom') )
	{
		state.result.code = 'rp_2_mushroom_sam'; // 'Yeah,. Ill have a slice of sausage and mushroom';

		state.session.act = 30;  // move on!
		if (state.session.gluten_saga>4) state.session.act = 40;  // move on!
	}
	else if (f.hasAll(state.result.tokens,'e_vegclass')
							&&
			f.hasAny(state.result.tokens, 'i_prefer','i_desire','i_suggest') )
	{
			state.result.code = 'rp_2_u_know_sam';  // 
			state.session.score_understand++;
			state.session.act = 30;  // move on!
			if (state.session.gluten_saga>4) state.session.act = 40;  // move on!
	}
// special case for "what would you like with your sausage"
	else if (f.hasAll(state.result.tokens,'e_wtype','e_sausage'))
	{
			state.result.code = 'rp_2_u_know_sam';  // 
			state.session.score_understand++;
			state.session.act = 30;  // move on!
			if (state.session.gluten_saga>4) state.session.act = 40;  // move on!
	}

	else if (f.hasAll(state.result.tokens, 'e_meatclass')
							&&
			f.hasAny(state.result.tokens, 'i_prefer','i_desire','i_suggest') )
	{
			state.result.code = 'rp_22_frustrated';  // I' already told you';  // 
			state.session.score_understand--;
			state.session.oops_trig=1;			// opportunity to reduce damage
	
	}
	else if (f.hasAny(state.result.tokens, 'e_bird','e_herb','e_hawaiin','e_fish'))
	{
		state.result.code = 'rp_22_wrong_toppings';    // 'Arent you listening, I want sausage and a veggie';
		state.session.score_listen--;
		state.session.oops_trig=1;			// opportunity to reduce damage

	}
/*
	else if (f.hasAny(state.result.tokens, 'e_crap','e_dog','i_insult'))
	{
		state.result.code = 'rp_22_disgusted';
		// state.result.reply = 'I dont like your sense of humour.  Good day.';
		state.session.game_over = true;
	}
*/	
	else 
	if (state.result.tokens.includes('e_meat') )	
	{
			state.result.code = 'rp_22_frustrated';  // I' already told you
	}

	else 
// bc We gotta have would you like sausage?		
	if ( (state.result.tokens.length <2) &&		// bc - this doesn't work for me...
		 (state.result.tokens.includes('e_sausage') )  )	
	{
			state.result.code = 'rp_22_frustrated';  // I' already told you
	}

	else if (state.result.tokens.includes( 'i_5sec') )
	{
		state.result.code = 'rp_22_impatient';  // 'I just dont know what toppings.';
		state.session.trust -= 2;
	}
	else
	if (state.result.tokens.includes( 'i_9sec') )
	{
		state.result.code = 'rp_1_fed_up';  // 'I wont be visiting here again.  Good day.';
		state.session.trust -= 2;
		state.session.game_over = true;
	}
	else if (state.result.tokens.includes('e_drink'))
	{
		state.result.code = 'rp_20_no_drink';    // was nodrink
		state.session.score_listen--;
	}
	else 
	if (state.result.tokens.includes('e_veggie') )	
	{
		if (state.session.veg_tries<2)
		{
			state.result.code = 'rp_22_veg_hint';
		}
		else 
		{
			state.result.code = 'rp_2_giveup_sam';
			state.session.act = 30;  // move on!
			state.result.choice_done = true;
		}
		state.session.veg_tries++;
	}
	
	else if ( f.hasAll(state.result.tokens, 'e_what','e_vegclass')			// what veggie?
			||
		f.hasAll(state.result.tokens, 'e_wtype','e_vegclass') )			// what veggie?	
	{
		if (state.session.veg_tries<2)
		{
			state.result.code = 'rp_22_veg_hint';				// what type is best?
		}
		else 
		{
			state.result.code = 'rp_2_giveup_sam';
			state.session.act = 30;  // move on!
			state.result.choice_done = true;
		}
		state.session.veg_tries++;
	}




/*
	else
	{
		act_990.process(state);
	}
*/

	logger.log('ACT 22 - processed');
};