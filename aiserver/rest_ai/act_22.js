var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');

// In this act, the AI has decided on the sausage, but is not sure of the veggie.

exports.process = function(state)
{
	logger.log('ACT 22 - start');

	if (   state.result.tokens.includes('e_mushroom')
		|| state.session.count_tries >= 6)
	{
		state.result.code = 'rp_22_correct'; // 'Yeah,. Ill have a slice of sausage and mushroom';
		state.session.act = 30;  // move on!
		if (state.session.glutten_known>0) state.session.act = 40;  // move on!
		state.result.choice_done = true;
	}
	else 
	if (    state.result.tokens.includes('e_sick')
		|| state.result.tokens.includes('e_gluten')
		|| state.result.tokens.includes('i_dietary')	)
	{
		state.result.code = 'rp_20_gluten_disclose';  // now that you mention it.
		state.session.score_understand+=2;
		state.session.glutten_known=1;
		state.session.next_act=22;	// come back here
		state.session.act = 32;  // move to glutten decided!  move on!
	}	
	else
	if (   state.result.tokens.includes('e_herb')
		|| state.result.tokens.includes('e_bird')
		|| state.result.tokens.includes('e_hawaiin')
		|| state.result.tokens.includes('e_fish') )
	{
		state.result.code = 'rp_22_wrong_toppings';
		state.session.score_listen--;
		// state.result.reply = 'Arent you listening, I want sausage and a veggie';
	}
	else 
	if (   state.result.tokens.includes('e_crap')
		|| state.result.tokens.includes('e_dog')
		|| state.result.tokens.includes('i_insult') )
	{
		state.result.code = 'rp_22_disgusted';
		// state.result.reply = 'I dont like your sense of humour.  Good day.';
		state.session.game_over = true;
	}
	else 
	if (state.result.tokens.includes('e_meat') )	
	{
			state.result.code = 'rp_22_frustrated';  // I' already told you
	}

	else 
	if (state.result.tokens.includes('e_veggie') )	
	{
		state.session.veg_tries++;

		if (state.session.veg_tries<3)
		{
			state.result.code = 'rp_22_veg_hint';
		}
		else 
		{
			state.result.code = 'rp_22_veg_giveup';
			state.session.act = 30;  // move on!
			state.result.choice_done = true;
		}
	}
	else 
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
		state.result.code = 'rp_20_fed_up';  // 'I wont be visiting here again.  Good day.';
		state.session.trust -= 2;
		state.session.game_over = true;
	}
	else if (state.result.tokens.includes('e_drink'))
	{
		state.result.code = 'rp_20_no_drink';    // was nodrink
		state.session.score_listen--;
	}


	else
	{
		act_990.process(state);
	}


	logger.log('ACT 22 - processed');
};