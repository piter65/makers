var logger = require('./logger');
var act_990 = require('./act_990');

exports.process = function(state)
{
	logger.log('process act 10 - pa');

	if (   state.result.entities.includes( 'i_thankyou') )
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'You are very welcome.';
			state.session.trust += 1;
				logger.log('thanked');
		}


	else if (   state.result.entities.includes( 'i_greeting')
		&& state.session.count_greeting == 0)
	{
		if (state.result.entities.includes('e_pizzeria'))
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Hi! This seemed like a nice place to eat.';
			state.session.trust += 1;
	//		state.session.act = 20;
		}
		else
		if (state.result.entities.includes('e_rude'))
		{
			state.result.code = 'rp_10_50';
			state.result.reply = 'That\'s not a nice way to greet a customer! Anyway, I\'d like a slice with no drink, but I can\'t decide on the topping. What do you suggest?';
			state.session.trust += -1;
			state.session.act = 20;
		}



		else
		{
			state.result.code = 'rp_10_40';
			state.result.reply = 'Yep first time I\'ve enterred the place.';

		}
		++state.session.count_greeting;
	}
	else
	if (state.result.entities.includes( 'i_offerhelp') )
	{
		state.result.code = 'rp_10_60';
		state.result.reply = 'I\'d like a slice with no drink, but I can\'t decide on the topping. What do you suggest?';
		state.session.trust += 0;
		state.session.act = 20;  // move on!
	}
	else 
	if (state.result.entities.includes( 'i_nothing') )
		{
			state.result.code = 'rp_10_40';
			state.result.reply = 'I was thinking about getting a slice.';

		}
	else
	if (state.result.entities.includes( 'i_insult') )
		{
			state.result.code = 'rp_10_40';
			state.result.reply = 'Im not sure I like this place or you.';
		state.session.trust -= 2;
		}
	else
	if (state.result.entities.includes( 'i_5sec') )
		{
			state.result.code = 'rp_10_85';
			state.result.reply = 'Are you gonna take my order or something?';
			state.session.trust -= 2;
		}
	else
	if (state.result.entities.includes( 'i_9sec') )
		{
			state.result.code = 'rp_10_85';
			state.result.reply = 'The service here stinks. Im gone.';
			state.session.game_over = true;
		}

	else
	{
		state = act_990.process(state);
	}

	logger.log('ACT 10 - processed');


	return state;
};