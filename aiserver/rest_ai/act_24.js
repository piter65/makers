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
		state.result.code = 'rp_24_correct';
		// state.result.reply = 'Yeah, thats about right. Ill have a slice of sausage and mushroom';

		state.session.act = 30;  // move on!
		if (state.session.gluten_saga>4) state.session.act = 40;  // move on!

		state.result.choice_done = true;
	}
	else if (f.includesAll(state.result.tokens, 'e_wtype','e_meatclass')
							&&
			f.includesAny(state.result.tokens, 'i_prefer','i_desire') )
	{
			state.result.code = 'rp_20_i_prefer_sausage';  // 
			state.session.score_understand++;
			state.session.act = 30;  // move on!	
			if (state.session.gluten_saga>4) state.session.act = 40;  // move on!
	}
	else if (f.includesAll(state.result.tokens, 'e_wtype','e_vegclass')
							&&
			f.includesAny(state.result.tokens, 'i_prefer','i_desire') )
	{
			state.result.code = 'rp_22_frustrated';  // I' already told you';  // 
			state.session.score_understand--;
	}
	else
	if (   state.result.tokens.includes('e_herb')
		|| state.result.tokens.includes('e_bird')
		|| state.result.tokens.includes('e_hawaiin')
		|| state.result.tokens.includes('e_fish') )
	{
		state.result.code = 'rp_22_wrong_toppings';   // 'Arent you listening,
		state.session.count_tries++;
		state.session.score_listen--;

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
	if (state.result.tokens.includes('e_veggie') )	
	{
			state.result.code = 'rp_24_frustrated';  // I' already told you
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
	if (state.result.tokens.includes('e_meat') )	
	{

		if (state.session.meat_tries<3)
		{
			state.result.code = 'rp_24_meat_hint';
		}
		else 
		{
			state.result.code = 'rp_24_meat_giveup';
			state.session.act = 30;  // move on!
		}
		state.session.meat_tries++;


	}



/*
	else
	{
		act_990.process(state);
	}

*/
	logger.log('ACT 24 - processed');
};