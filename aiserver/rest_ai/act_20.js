var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');

// In this act, the player has been told that the AI is waiting for an order.

exports.process = function(state)
{
	logger.log('ACT 20 - start pa - tries' + state.session.count_tries);

	if (   state.result.tokens.includes('e_sausage')
		&& state.result.tokens.includes('e_mushroom'))
	{
		state.result.code = 'rp_20_decided_both';  //'Yeah, . Ill have sausage and mushroom';
		state.session.act = 30;  // move on!
		if (state.session.glutten_solved>0) state.session.act = 40;  // move on!
	}

	else
	if (   state.result.tokens.includes('i_offerhelp')		)
	{
		state.result.code = 'rp_20_asked_twice_nice';  // Um.   yeah...
		state.session.score_understand--;
	}

	else
	if (   state.result.tokens.includes('e_slice')
		&& state.result.tokens.includes('e_wtype')
		&& state.result.tokens.includes('i_prefer')
		)
	{
		state.result.code = 'rp_20_pizza_prefer';  // you actually care!
		state.session.choice_done = true;
		state.session.score_understand+=2;
			logger.log('ACT 20 home run');
	}

	else if ( state.result.tokens.includes('e_wtype')
		&& state.result.tokens.includes('i_prefer')
		)
	{
		state.result.code = 'rp_20_pizza_prefer';  // you actually care!
		state.session.choice_done = true;
		state.session.score_understand+=2;
			logger.log('ACT 20 home run');
	}
	else if ( state.result.tokens.includes('i_prefer')
		&&	state.result.tokens.includes('e_veggie') 
		&&	state.result.tokens.includes('e_meat') 	)

	{
		state.result.code = 'rp_20_carno_prefer';  // you actually sorta care!
		state.session.score_understand+=1;
	}
	else

	if (   state.result.tokens.includes('e_slice')
		&& state.result.tokens.includes('i_prefer')
		)
	{
		state.result.code = 'rp_20_prefer_or_want';  // you almost actually care!
	}
	else
	if ( state.result.tokens.includes('i_prefer')
		&&	state.result.tokens.includes('e_veggie') )
	{
		state.result.code = 'rp_20_veg_uprefer';  // you almost actually care!
		state.session.score_understand+=1;
		state.session.act = 24;  // veggie decided!  move on!
	}
	else

	if ( state.result.tokens.includes('i_prefer')
		&&	state.result.tokens.includes('e_meat') )
	{
		state.result.code = 'rp_20_meat_uprefer';  // you almost actually care!
		state.session.score_understand+=1;
		state.session.act = 22;  // meat decided!  move on!
	}
	else
	if (   state.result.tokens.includes('e_sick')
		|| state.result.tokens.includes('e_gluten')
		|| state.result.tokens.includes('i_dietary')

		)
	{
		if (state.session.gluten_solved>0)
		{
			state.result.code = 'rp_990_complimented_too_much';
		}
		else
		{

			state.result.code = 'rp_20_gluten_disclose';  // now that you mention it.
			state.session.score_understand+=2;
			state.session.empathy_opportunity=true;   // looking for sory
			state.session.next_act=22;	// come back here
			state.session.act = 32;  // move to glutten decided!  move on!
		}
	}
	else
	if (state.result.tokens.includes('e_sausage'))
	{
		state.result.code = 'rp_20_decided_sausage';
		// state.result.reply = 'Sausage sounds perfect, but I want a veggie too.';
		state.session.act = 22;  // move on!
	}
	else
	if (   state.result.tokens.includes('e_mushroom') )

	{
		state.result.code = 'rp_20_decided_mushrooms'; // 'Mushrooms sound good. what next?
		state.session.act = 24;  // move on!
	}

	else
	if ( state.session.count_tries >= 4)
	
	{
		state.result.code = 'rp_24_meat_giveup'; // 'awwwe, I give up...
		state.session.act = 24;  // move on!
	}



	else
	if (   state.result.tokens.includes('e_meat') )
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

	else
	if ( state.result.tokens.includes('e_veggie') )
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



	else
	if (state.result.tokens.includes('e_topping'))
	{
		state.result.code = 'rp_20_considering_topping';
		// state.result.reply = 'Maybe just one meat and a veggie.';
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
	else
	if (state.result.tokens.includes('e_crap'))
	{
		state.result.code = 'rp_20_considering_crap';// 'Maybe you like that type of thing, but not for me.';
		state.session.count_tries++;
		state.session.score_exec--;
	}
	else
	if (state.result.tokens.includes('e_herb'))
	{
		state.result.code = 'rp_20_considering_crap';  // 'Maybe you like that type of thing, but not for me.';
		state.session.count_tries++;
	}

	else
	if (state.result.tokens.includes('e_fish'))
	{
		state.result.code = 'rp_20_considering_fish';
		// state.result.reply = 'Fish and pizza do not go together.';
		state.session.count_tries++;
		state.session.trust -= 1;
	}
	else
	if (state.result.tokens.includes('e_dog'))
	{
		state.result.code = 'rp_20_considering_dog';
		// state.result.reply = 'You gotta be joking, no one eats a dog pizza.';
		state.session.trust -= 2;
	}
	else
	if (state.result.tokens.includes('e_bird'))
	{
		state.result.code = 'rp_20_considering_bird';
		// state.result.reply = 'Birds of a feather, flock together, and I will eat that pizza- NEVER!';
		state.session.count_tries++;
		state.session.trust -= 1;
	}
	else
	if (state.result.tokens.includes('i_discover'))
	{
		state.result.code = 'rp_20_self_discovery';
		// state.result.reply = 'You know, I do not usually eat pizza so it has been a while, but lets see. How about sausage and a veggie?';
		state.session.trust += 2;
	}
	else
	if (state.result.tokens.includes('e_drink'))
	{
		state.result.code = 'rp_20_no_drink';    // was nodrink
		state.session.score_listen--;
	}
	else
	if (state.result.tokens.includes('i_offerhelp'))
	{
		state.result.code = 'rp_20_order_please_twice_nice';    // was nodrink
		state.session.score_listen--;
	}
	else
	if (state.result.tokens.includes( 'i_5sec') )
	{
		state.result.code = 'rp_20_impatient';  // 'I just dont know what toppings.';
		state.session.trust -= 2;
	}
	else
	if (state.result.tokens.includes( 'i_9sec') )
	{
		state.result.code = 'rp_20_fed_up';  // 'I wont be visiting here again.  Good day.';
		state.session.trust -= 2;
		state.session.game_over = true;
	}
	else
	{
		act_990.process(state);
	}

	logger.log('ACT 20 - processed');
};