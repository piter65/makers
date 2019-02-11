var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');
const f = require('./func');

// In this act, the player has been told that the AI is waiting for an order.

exports.process = function(state)
{
	logger.log('ACT 20 - start pa - tries' + state.session.count_tries);

	if (state.result.tokens.includes( 'i_close') )
	{
		state.result.code = 'rp_20_dont_know_toppings';  // I don't know toppings
		state.session.score_discovery --;
	}
	else if (f.hasAll(state.result.tokens, 'e_mushroom','e_sausage')
		&& 	(!f.hasAny(state.result.tokens, 'e_meat','e_veggie') ) )// the only toppings were sausage and mushroom
	{
		state.result.code = 'rp_2_decided_sam';  //'Yeah, . Ill have sausage and mushroom';
		state.session.act = 30;  // move on!
		if (state.session.gluten_saga>4) state.session.act = 40;  // move on!
	}
	else if (f.hasAll(state.result.tokens, 'e_mushroom','e_sausage')
		&& (f.hasAny(state.result.tokens, 'e_meat','e_veggie')  ) ) // Manytoppings including sausage and mushroom
	{
		state.result.code = 'rp_2_sam_but_more';  //'a bit too much . Ill have sausage and mushroom';
		state.session.act = 30;  // move on!
		if (state.session.gluten_saga>4) state.session.act = 40;  // move on!
	}
	
	else if (f.hasAll(state.result.tokens,'e_meatclass','e_vegclass')
								&&
			f.hasAny(state.result.tokens, 'i_prefer','e_desire','i_suggest') )
	{
		state.result.code = 'rp_20_one_of_each';  // you actually sorta care!
		state.session.score_discovery+=1;
	}

// added late january 27 just because scott asks "what would you like on your pizza"
	else if (f.hasAll(state.result.tokens,'e_wtype','e_slice'))
	{
		state.result.code = 'rp_20_one_of_each';  // you actually sorta care!
		state.session.score_discovery+=1;
	}



	else if (   state.result.tokens.includes('i_offerhelp')		)
	{
		state.result.code = 'rp_20_asked_twice_annoyed';  // Um.   yeah...
		state.session.score_discovery--;
	}
/*   -- peter changed 2/10 for scott.
	else if (f.hasAll(state.result.tokens,  'e_wtype' ,'e_meatclass')
						&&
			f.hasAny(state.result.tokens, 'i_prefer','e_desire'))
	{
			state.result.code = 'rp_20_decided_sausage';  // 
			state.session.score_discovery++;
			state.session.act = 22;  // meat decided!  move on!	
	}
*/

	else if (f.hasAll(state.result.tokens, 'e_wtype' , 'e_meatclass')
								||
			f.hasAll(state.result.tokens, 'e_what','e_meatclass')
								||

			f.hasAll(state.result.tokens, 'e_prefer','e_meatclass')
								||
			f.hasAll(state.result.tokens, 'e_desire','e_meatclass')
								||
			f.hasAll(state.result.tokens, 'i_suggest','e_meatclass')
		)
//		&& state.session.one_meat_one_veggie_ctx>0)		// context is just said one meat one veggie
	{
			state.result.code = 'rp_20_i_like_sausage';  // 
			state.session.score_discovery++;
			state.session.act = 22;  // meat decided!  move on!	
	}

/* changing feb 10 
	else if (f.hasAll(state.result.tokens, 'e_wtype','e_vegclass')
						&&
			f.hasAny(state.result.tokens, 'i_prefer','e_desire') )
	{
			state.result.code = 'rp_20_decided_mushroom';  // 
			state.session.score_discovery++;
			state.session.act = 24;  // veggie decided!  move on!	
	}
*/	

	else if (f.hasAll(state.result.tokens, 'e_wtype','e_vegclass')
								||
			f.hasAll(state.result.tokens, 'e_what','e_vegclass')
								||
			f.hasAll(state.result.tokens, 'i_suggest','e_vegclass')	  // how about veggies?						
								||
			f.hasAll(state.result.tokens, 'e_prefer','e_vegclass')
								||
			f.hasAll(state.result.tokens, 'e_desire','e_vegclass')
		)

//			&& state.session.one_meat_one_veggie_ctx>0)		// context is just said one meat one veggie
	{
			state.result.code = 'rp_20_i_like_mushroom';  // 
			state.session.score_discovery++;
			state.session.act = 24;  // veggie decided!  move on!	
	}
	else if (f.hasAll(state.result.tokens, 'i_prefer','e_wtype'))
	{
			state.result.code = 'rp_20_one_of_each';  // one of each
			state.session.score_discovery++;
			state.session.one_meat_one_veggie_trig=1;				// set the one meat one veggie context for next round...
	}


	else if (f.hasAny(state.result.tokens,'e_wtype','e_what')
								&&
			f.hasAny(state.result.tokens, 'e_topping') )
	{
		state.result.code = 'rp_20_one_of_each';  // you actually sorta care!
		state.session.score_discovery+=1;
	}

	else if (f.hasAll(state.result.tokens,'e_vegclass')
							&&
		f.hasAny(state.result.tokens, 'i_prefer','i_desire') )
	{
		state.result.code = 'rp_20_i_decided_mushroom';  // you almost actually care!
		state.session.score_discovery+=1;
		state.session.act = 24;  // veggie decided!  move on!
	}

	else if (f.hasAll(state.result.tokens, 'e_meatclass')
									&&
		f.hasAny(state.result.tokens, 'i_prefer','i_desire') )
	{
		state.result.code = 'rp_20_decided_sausage';  // you almost actually care!
		state.session.score_discovery+=1;
		state.session.act = 22;  // meat decided!  move on!
	}

// most likely fishing down here...
	else if (state.result.tokens.includes('e_sausage'))
	{
		state.result.code = 'rp_20_decided_sausage';
		// state.result.reply = 'Sausage sounds perfect, but I want a veggie too.';
		state.session.act = 22;  // move on!
	}
	else if (   state.result.tokens.includes('e_mushroom') )
	{
		state.result.code = 'rp_20_decided_mushroom'; // 'Mushrooms sound good. what next?
		state.session.act = 24;  // move on!
	}

// I'm not sure why this is here anymore or what it does?
	else if (   state.result.tokens.includes('e_meat') )
	{
		if (state.session.meat_offers<1)
		{
			state.result.code = 'rp_20_meat1';
		}
		else
		{
			state.result.code = 'rp_20_decide_sausage_veg';
			state.session.act = 22;  // move on!
		}
		state.session.meat_offers++;
	
	}
	else if ( state.result.tokens.includes('e_veggie') )
	{
		if (state.session.veg_offers<1)
		{
			state.result.code = 'rp_20_veg1';
		}
		else
		{
			state.result.code = 'rp_20_decide_mushroom_meat';
			state.session.act = 24;  // move on!
		}
		state.session.veg_offers++;
	}

	else if (state.result.tokens.includes('e_drink'))
	{
		state.result.code = 'rp_20_no_drink';    // was nodrink
		state.session.score_listen--;
	}

	else if (state.result.tokens.includes('e_topping'))
	{
		state.result.code = 'rp_20_considering_topping';	// 'Maybe just one meat and a veggie.';
		state.session.count_tries++;
	}
	else if (f.hasAll(state.result.tokens, 'i_desire','e_wtype'))
	{
		state.result.code = 'rp_20_considering_topping';  // 'Maybe just one meat and a veggie.';
		state.session.count_tries++;
	}

	else
	if (state.result.tokens.includes('e_hawaiin'))
	{
		state.result.code = 'rp_20_considering_hawaiin';  // 'Yech- way too sweet for me.';
		state.session.count_tries++;
	}
	else
	if (state.result.tokens.includes('e_combo'))
	{
		state.result.code = 'rp_20_considering_combo';  // 'Too much stuff.  Something simpler.';
		state.session.count_tries++;
	}
	else if (state.result.tokens.includes('e_crap'))
	{
		state.result.code = 'rp_20_considering_silly';// 'Maybe you like that type of thing, but not for me.';
		state.session.count_tries++;
		state.session.score_exec--;
	}
	else if (state.result.tokens.includes('e_herb'))
	{
		state.result.code = 'rp_20_considering_silly';  // 'Maybe you like that type of thing, but not for me.';
		state.session.count_tries++;
	}

	else if (state.result.tokens.includes('e_fish'))
	{
		state.result.code = 'rp_20_considering_fish';
		// state.result.reply = 'Fish and pizza do not go together.';
		state.session.count_tries++;
		state.session.trust -= 1;
	}
	else if (state.result.tokens.includes('e_dog'))
	{
		state.result.code = 'rp_20_considering_dog';  // 'You gotta be joking, no one eats a dog pizza.';
		state.session.trust -= 2;
	}
	else if (state.result.tokens.includes('e_bird'))
	{
		state.result.code = 'rp_20_considering_bird'; // 'Birds of a feather, flock together, and I will eat that pizza- NEVER!';
		state.session.count_tries++;
		state.session.trust -= 1;
	}

	else if (state.result.tokens.includes('i_offerhelp'))
	{
		state.result.code = 'rp_20_asked_twice_annoyed';    // was nodrink
		state.session.score_listen--;
	}
	else if (state.result.tokens.includes( 'i_5sec') )
	{
		state.result.code = 'rp_20_dont_know_toppings';  // 'I just dont know what toppings.';
		state.session.trust -= 2;
	}
	else if (state.result.tokens.includes( 'i_9sec') )
	{
		state.result.code = 'rp_go_fed_up';  // 'I wont be visiting here again.  Good day.';
		state.session.trust -= 2;
		state.session.game_over = true;
	}
	else if (state.result.tokens.includes( 'i_close') )
	{
		state.result.code = 'rp_20_dont_know_toppings';  // 'I don't know the toppings;
		state.session.trust -= 1;

	}

	logger.log('ACT 20 - processed');
};