var logger = require('./logger');
var act_990 = require('./act_990');

exports.process = function(state)
{
	logger.log('process');

	if (   state.result.intent == 'thankyou' )
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'You are very welcome.';
			state.session.trust += 1;
		}


	else if (   state.result.intent == 'greeting'
		&& state.session.count_greeting == 0)
	{
		if (state.result.entities.includes('pizzeria'))
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Hi! This seemed like a nice place to eat.';
			state.session.trust += 1;
	//		state.session.act = 20;
		}
		else
		if (state.result.entities.includes('rude'))
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
			state.session.trust += 0;
//			state.session.act = 20;		// Peter is changing
		}

		++state.session.count_greeting;
	}
	else
	if (state.result.intent == 'offerhelp')
	{
		state.result.code = 'rp_10_60';
		state.result.reply = 'I\'d like a slice with no drink, but I can\'t decide on the topping. What do you suggest?';
		state.session.trust += 0;
		state.session.act = 20;  // move on!
	}
	else
	{
		state = act_990.process(state);
	}

	logger.log('ACT 10 - processed');


	return state;
};