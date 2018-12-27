var logger = require('./logger');
var act_990 = require('./act_990');

// In this act, the player has been told that the AI is waiting for an order.

exports.process = function(state)
{
   logger.log('ACT 20 - start pa - tries' + state.session.count_tries);

	if (state.result.entities.includes('e_sausage') && state.result.entities.includes('e_mushroom'))
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'Yeah, thats about right. Ill have a slice of sausage and mushroom';
			state.session.act = 30;  // move on!
			state.choicedone = true;
		}
	else if (state.result.entities.includes('e_mushroom') ||
				(state.session.count_tries>=2)
			)
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'Mushrooms sound good. Ill have a slice of sausage and mushroom';
			state.session.act = 30;  // move on!
			state.choicedone = true;
		}
	else if (state.result.entities.includes('e_sausage'))
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'Sausage sounds perfect, but I want a veggie too.';
			state.session.act = 22;  // move on!
		}
	else if (state.result.entities.includes('e_meat') ||
			 state.result.entities.includes('e_veggie')
		)
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'Maybe one meat, one veggie?  I got it.  Sausage and one veggie?  Any suggestion on the veggie?';
			state.session.act = 22;  // move on!
		}

	else if (state.result.entities.includes('e_topping'))
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'Maybe just one meat and a veggie.';
			state.session.count_tries++;
		 	state.session.trust += 1;
		}	

	else if (state.result.entities.includes('e_hawaiin'))
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'Yech- way too sweet for me.';
			state.session.trust += 1;
			state.session.count_tries++;
		}
	else if (state.result.entities.includes('e_combo'))
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'Too much stuff.  Something simpler.';
			state.session.trust -= 1;
			state.session.count_tries++;
		}
	else if (state.result.entities.includes('e_crap'))
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'Maybe you like that type of thing, but not for me.';
			state.session.count_tries++;
			state.session.trust -= 1;
		}
	else if (state.result.entities.includes('e_fish'))
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'Fish and pizza do not go together.';
			state.session.count_tries++;
			state.session.trust -= 1;
		}


	else if (state.result.entities.includes('e_dog'))
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'You gotta be joking, no one eats a dog pizza.';
			state.session.trust -= 2;
		}
	else if (state.result.entities.includes('e_bird'))
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 'Birds of a feather, flock together, and I will eat that pizza- NEVER!';
			state.session.count_tries++;
			state.session.trust -= 1;
		}


	else if (state.result.entities.includes('i_discover'))
		{
			state.result.code = 'rp_20_99';
			state.result.reply = 
'You know, I do not usually eat pizza so it has been a while, but lets see. How about sausage and a veggie?';
			state.session.trust += 2;
		}
	else if (state.result.entities.includes( 'i_5sec') )
		{
			state.result.code = 'rp_10_85';
			state.result.reply = 'I just dont know what toppings.';
		   state.session.trust -= 2;
		}
	else if (state.result.entities.includes( 'i_9sec') )
		{
			state.result.code = 'rp_10_86';
			state.result.reply = 'I wont be visiting here again.  Good day.';
		   state.session.trust -= 2;
		   	state.session.game_over = true;
		}


	else
	{
		state = act_990.process(state);
	}

	logger.log('ACT 20 - processed');


	return state;
};