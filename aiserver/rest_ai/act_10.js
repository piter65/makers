const logger = require('./logger');
const decoder = require('./decoder');
const act_990 = require('./act_990');

exports.process = function(state)
{
	logger.log('process act 10 - pa');

	if (state.result.tokens.includes( 'i_thankyou') )
	{
		state.result.code = 'rp_10_welcome';    //  'You are very welcome.''
		state.session.trust += 1;
		logger.log('thanked');
	}
	else if (state.result.tokens.includes( 'i_mirror') )
	{
		state.result.code = 'rp_10_welcome';    //  'You are very welcome.''
		state.session.trust += 1;
	}
	else
	if (   state.result.tokens.includes( 'i_greeting')
		&& state.session.count_greeting == 0)
	{
		if (state.result.tokens.includes('e_storebrand'))
		{
			state.result.code = 'rp_10_greet';    //'Hi! This seemed like a nice place to eat.';
			state.session.trust += 1;
	//		state.session.act = 20;
		}
		else
		if (state.result.tokens.includes('e_rude'))
		{
			state.result.code = 'rp_10_rude';  //'That's not a nice.   I can\'t decide.  do you suggest?';
			state.session.trust += -1;
			state.session.act = 20;
		}
		else
		{
			state.result.code = 'rp_10_first_time'; // 'Yep first time I\'ve enterred the place.';
		}
		++state.session.count_greeting;
	}
	else
	if (state.result.tokens.includes( 'i_offerhelp') )
	{
		state.result.code = 'rp_10_offeredhelp';   //'I'd like a slice, but I can't decide. What do you suggest?';
		state.session.trust += 0;
		state.session.act = 20;  // move on!
	}
	else 
	if (state.result.tokens.includes( 'i_nothing') )
	{
		state.result.code = 'rp_10_customer_initiates';   //'I was thinking about getting a slice.';
	}
	else
	if (state.result.tokens.includes( 'i_insult') )
	{
		state.result.code = 'rp_10_insulted';    // 'Im not sure I like this place or you.';
		state.session.trust -= 2;
	}
	else
	if (state.result.tokens.includes( 'i_5sec') )
	{
		state.result.code = 'rp_10_impatient';   // 'Are you gonna take my order or something?';
		state.session.trust -= 2;
	}
	else
	if (state.result.tokens.includes( 'i_9sec') )
	{
		state.result.code = 'rp_10_fed_up';  // 'The service here stinks. Im gone.';
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