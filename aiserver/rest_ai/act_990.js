var logger = require('./logger');
var randomInt = require('random-int');

exports.process = function(state)
{
	// logger.log('ACT 10 - start');

	if (   state.result.intent == 'compliment')
	{
		if (state.session.count_compliment_dress == 0)
		{
			state.result.code = 'rp_990_20';
			state.result.reply = 'Thanks. I got it at Brooks Brothers.';
			state.session.trust += 1;
		}
		else
		{
			state.result.code = 'rp_990_21';
			state.result.reply = 'Enough about me. Can we get on with my pizza?';
			state.session.trust += -1;
		}

		++state.session.count_compliment_dress;
	}
	else
	if (state.result.entities.includes('insult'))
	{
		if (state.session.count_insult == 0)
		{
			state.result.code = 'rp_990_30';
			state.result.reply = 'Excuse me?';
			state.session.trust += -2;
		}
		else
		{
			state.result.code = 'rp_990_31';
			state.result.reply = 'I think I\'ll go somewhere else for lunch.';
			state.session.trust += -3;
			state.session.game_over = true;
		}

		++state.session.count_insult;
	}
	else
	if (state.result.entities.includes('superinsult'))
	{
		{
			state.result.code = 'rp_990_40';
			state.result.reply = 'Fuck you and the horse you rode in on.\'m leaving!';
			state.session.trust += -3;
			state.session.game_over = true;
		}

		++state.session.count_insult;
	}
	else
	if (state.result.entities.includes('cuss'))
	{
		{
			state.result.code = 'rp_990_50';
			state.result.reply = 'I\'m leaving!';
			state.result.direction = 'very insulted';
			state.session.trust += -3;
			state.session.game_over = true;
		}
	}
	else
	if (   state.result.intent == 'smalltalk'
		&& state.result.entities.includes('sports'))
	{
		{
			state.result.code = 'rp_990_60';
			state.result.reply = 'I don\'t really follow sports.';
			state.result.direction = 'awkward';
			state.session.trust += 0;
		}
	}
	else
	if (   state.result.intent == 'smalltalk'
		&& state.result.entities.includes('weather'))
	{
		{
			state.result.code = 'rp_990_70';
			state.result.reply = 'Um, yeah, I guess so.';
			state.result.direction = 'awkward';
			state.session.trust += 0;
		}
	}
	else
	if (state.result.intent == 'greeting')
	{
		{
			state.result.code = 'rp_990_90';
			state.result.reply = 'Yeah, we\'ve already met.';
			state.result.direction = 'somewhat annoyed';
			state.session.trust += -1;
		}

		++state.session.count_greeting;
	}
	else
	if (state.result.intent == 'offerhelp')
	{
		{
			state.result.code = 'rp_990_90';
			state.result.reply = 'Yeah, we\'ve already met.';
			state.result.direction = 'somewhat annoyed';
			state.session.trust += -1;
		}
	}
	else
	// if (state.result.text.includes('unintelligible'))
	{
		{
			const replies = 
			[
				'Excuse me. I\'m a little hard of hearing. Can you speak more slowly and clearly, please?',
				'Didn\'t catch that. Can you speak more slowly and clearly?'
			];

			state.result.code = 'rp_990_80';
			state.result.reply = replies[randomInt(replies.length - 1)];
			state.session.trust += 0;
		}
	}

	logger.log('ACT 990 - processed');


	return state;
};