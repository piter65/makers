var logger = require('./logger');
var act_990 = require('./act_990');

exports.process = function(state)
{
	// logger.log('ACT 10 - start');

	if (   state.result.intent == 'greeting'
		&& state.session.count_greeting == 0)
	{
		if (state.result.entities.includes('pizzaria namedrop'))
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Hi! This seems like a nice place to eat. I\'d like a slice with no drink, but I can\'t decide on the topping. What do you suggest?';
			state.result.direction = 'pleasant';
			state.session.trust += 1;
			state.session.act = 20;
		}
		else
		if (state.result.entities.includes('rude'))
		{
			state.result.code = 'rp_10_50';
			state.result.reply = 'That\'s not a nice way to greet a customer! Anyway, I\'d like a slice with no drink, but I can\'t decide on the topping. What do you suggest?';
			state.result.direction = 'somewhat annoyed';
			state.session.trust += -1;
			state.session.act = 20;
		}
		else
		{
			state.result.code = 'rp_10_40';
			state.result.reply = 'Hi. I\'d like a slice with no drink, but I can\'t decide on the topping. What do you suggest?';
			state.result.direction = 'curt';
			state.session.trust += 0;
			state.session.act = 20;
		}

		++state.session.count_greeting;
	}
	else
	if (state.result.intent == 'offerhelp')
	{
		state.result.code = 'rp_10_60';
		state.result.reply = 'I\'d like a slice with no drink, but I can\'t decide on the topping. What do you suggest?';
		state.result.direction = 'friendly';
		state.session.trust += 0;
		state.session.act = 20;
	}
	else
	{
		state = act_990.process(state);
	}

	logger.log('ACT 10 - processed');


	return state;
};