var logger = require('./logger');
var randomInt = require('random-int');

exports.process = function(state, text)
{
	// logger.log('ACT 10 - start');

	if (text.includes('compliment dress'))
	{
		if (state.count_compliment_dress == 0)
		{
			state.reply = 'Thanks. I got it at Brooks Brothers.';
			state.direction = 'appreciative';
			state.trust += 1;
		}
		else
		{
			state.reply = 'Enough about my shirt. Can we get on with my pizza?';
			state.direction = 'somewhat annoyed';
			state.trust += -1;
		}

		++state.count_compliment_dress;
	}
	else
	if (text.includes('insult'))
	{
		if (state.count_compliment_dress == 0)
		{
			state.reply = 'Excuse me?';
			state.direction = 'insulted';
			state.trust += -2;
		}
		else
		{
			state.reply = 'I think I\'ll go somewhere else for lunch.';
			state.direction = 'very insulted';
			state.trust += -3;
			state.game_over = true;
		}

		++state.count_insult;
	}
	else
	if (text.includes('super insult'))
	{
		{
			state.reply = 'I\'m leaving!';
			state.direction = 'very insulted';
			state.trust += -3;
			state.game_over = true;
		}

		++state.count_insult;
	}
	else
	if (text.includes('disgusting phrases'))
	{
		{
			state.reply = 'I\'m leaving!';
			state.direction = 'very insulted';
			state.trust += -3;
			state.game_over = true;
		}
	}
	else
	if (text.includes('small talk sports'))
	{
		{
			state.reply = 'I don\'t really follow sports.';
			state.direction = 'awkward';
			state.trust += 0;
		}
	}
	else
	if (text.includes('small talk weather'))
	{
		{
			state.reply = 'Um, yeah, I guess so.';
			state.direction = 'awkward';
			state.trust += 0;
		}
	}
	else
	if (text.includes('greet'))
	{
		{
			state.reply = 'Huh!?';
			state.direction = 'confused';
			state.trust += 0;
		}
	}
	else
	// if (text.includes('unintelligible'))
	{
		{
			const replies = 
			[
				'Excuse me. I\'m a little hard of hearing. Can you speak more slowly and clearly, please?',
				'Didn\'t catch that. Can you speak more slowly and clearly?'
			];

			state.reply = replies[randomInt(replies.length - 1)];
			state.direction = 'confused';
			state.trust += 0;
		}
	}

	logger.log('ACT 990 - processed: ' + state.reply);


	return state;
};