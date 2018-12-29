const logger = require('./logger');
const decoder = require('./decoder');
const act_990 = require('./act_990');

exports.process = function(state)
{
	logger.log('process act 10 - pa');

	if (state.result.tokens.includes( 'i_thankyou') )
	{
		state.result.code = 'rp_10_30_welcome';
		// state.result.reply = 'You are very welcome.';
		state.session.trust += 1;
		logger.log('thanked');
	}
	else
	if (   state.result.tokens.includes( 'i_greeting')
		&& state.session.count_greeting == 0)
	{
		if (state.result.tokens.includes('e_pizzeria'))
		{
			state.result.code = 'rp_10_30_greet';
			// state.result.reply = 'Hi! This seemed like a nice place to eat.';
			state.session.trust += 1;
	//		state.session.act = 20;
		}
		else
		if (state.result.tokens.includes('e_rude'))
		{
			state.result.code = 'rp_10_50_rude';
			// state.result.reply = 'That\'s not a nice way to greet a customer! Anyway, I\'d like a slice with no drink, but I can\'t decide on the topping. What do you suggest?';
			state.session.trust += -1;
			state.session.act = 20;
		}
		else
		{
			state.result.code = 'rp_10_40_first_time';
			// state.result.reply = 'Yep first time I\'ve enterred the place.';
		}
		++state.session.count_greeting;
	}
	else
	if (state.result.tokens.includes( 'i_offerhelp') )
	{
		state.result.code = 'rp_10_60_offeredhelp';
		// state.result.reply = 'I\'d like a slice with no drink, but I can\'t decide on the topping. What do you suggest?';
		state.session.trust += 0;
		state.session.act = 20;  // move on!
	}
	else 
	if (state.result.tokens.includes( 'i_nothing') )
	{
		state.result.code = 'rp_10_40_customer_initiates';
		// state.result.reply = 'I was thinking about getting a slice.';

	}
	else
	if (state.result.tokens.includes( 'i_insult') )
	{
		state.result.code = 'rp_10_40_insulted';
		// state.result.reply = 'Im not sure I like this place or you.';
		state.session.trust -= 2;
	}
	else
	if (state.result.tokens.includes( 'i_5sec') )
	{
		state.result.code = 'rp_10_85_impatient';
		// state.result.reply = 'Are you gonna take my order or something?';
		state.session.trust -= 2;
	}
	else
	if (state.result.tokens.includes( 'i_9sec') )
	{
		state.result.code = 'rp_10_86_fed_up';
		// state.result.reply = 'The service here stinks. Im gone.';
		state.session.game_over = true;
	}
	else
	{
		act_990.process(state);
	}

	// Decode the reply.
	state.result.reply = decoder.decode_reply(state.result.code);

	logger.log('ACT 10 - processed');
};