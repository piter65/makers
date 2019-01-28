var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');
const f = require('./func');


// In this act, the AI has decided on the mushroom, but not on the topping...

exports.process = function(state)
{
	logger.log('ACT 24 - start');

	if (   state.result.tokens.includes('e_sausage'))
	{
		state.result.code = 'rp_2_yes_sam';
		// state.result.reply = 'Yeah, thats about right. Ill have a slice of sausage and mushroom';

		state.session.act = 30;  // move on!
		if (state.session.gluten_saga>4) state.session.act = 40;  // move on!

		state.result.choice_done = true;
	}
	else if (	f.hasAll(state.result.tokens,'e_meatclass')
							&&
			f.hasAny(state.result.tokens, 'i_prefer','i_desire','i_suggest') 
			)

	{
			state.result.code = 'rp_2_sausage_sam';  // 
			state.session.score_understand++;
			state.session.act = 30;  // move on!	
			if (state.session.gluten_saga>4) state.session.act = 40;  // move on!
	}

// special case for "what would you like with your mushroom"
	else if (f.hasAll(state.result.tokens,'e_wtype','e_mushroom'))
	{
			state.result.code = 'rp_2_sausage_sam';  // 
			state.session.act = 30;  // move on!	
			if (state.session.gluten_saga>4) state.session.act = 40;  // move on!
	}








	else if (f.includesAll(state.result.tokens, 'e_wtype','e_vegclass')
							&&
			f.includesAny(state.result.tokens, 'i_prefer','i_desire') )
	{
			state.result.code = 'rp_24_frustrated_restate';  // I' already told you';  // 
			state.session.score_understand--;
			state.session.oops_trig=1;			// opportunity to reduce damage

	}
	else if ( f.hasAny(state.result.tokens, 'e_mushroom')	// offered mushrooms and no meat.	
					&&
				!f.hasAny(state.result.tokens, 'e_meat'))
	{
		state.result.code = 'rp_24_frustrated_restate' ;   // 'Arent you listening,
		state.session.count_tries++;
		state.session.score_listen--;
		state.session.oops_trig=1;			// opportunity to reduce damage


	}
	else if (f.hasAny(state.result.tokens, 'e_bird','e_herb','e_hawaiin','e_fish'))	
	{
		state.result.code = 'rp_24_frustrated_restate';   // 'Arent you listening,
		state.session.count_tries++;
		state.session.score_listen--;

	}

	else if (f.hasAny(state.result.tokens, 'e_crap','e_dog','i_insult'))
	{
		state.result.code = 'rp_22_disgusted';  //'I dont like your sense of humour.  Good day.';
		state.session.game_over = true;
	}
	else if (state.result.tokens.includes('e_veggie') )	
	{
			state.result.code = 'rp_24_frustrated_restate';  // I' already told you
	}

	else
	if (state.result.tokens.includes( 'i_5sec') )
	{
		state.result.code = 'rp_24_impatient';  // 'I just dont know what toppings.';
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
	if (state.result.tokens.includes('e_meat') )		
	{
		if (state.session.meat_tries<2)
		{
			state.result.code = 'rp_24_meat_hint';
		}
		else 
		{
			state.result.code = 'rp_2_giveup_sam';
			state.session.act = 30;  // move on!
			if (state.session.gluten_saga>4) state.session.act = 40;  // move on!
	
		}
		state.session.meat_tries++;
	}
	else if (
		f.hasAll(state.result.tokens, 'e_what','e_meatclass') 			// what meat?	
				||
		f.hasAll(state.result.tokens, 'e_wtype','e_meatclass') )			// what meat?	
	{
		if (state.session.meat_tries<2)
		{
			state.result.code = 'rp_24_meat_hintb';
		}
		else 
		{
			state.result.code = 'rp_2_giveup_sam';
			state.session.act = 30;  // move on!
			if (state.session.gluten_saga>4) state.session.act = 40;  // move on!

		}
		state.session.meat_tries++;
	}

	logger.log('ACT 24 - processed');
};