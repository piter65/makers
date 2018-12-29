var logger = require('./logger');
var randomInt = require('random-int');

exports.process = function(state)
{
	logger.log('ACT 99 - start');

	if (   state.result.tokens.includes( 'i_compliment') )
	{
		if (state.session.count_compliment_dress == 0)
		{
			state.result.code = 'rp_990_20_complimented';
			// state.result.reply = 'Thanks. I got it at Brooks Brothers.';
			state.session.trust += 1;
			logger.log('compliment logged');
		}
		else
		{
			state.result.code = 'rp_990_21_complimented_too_much';
			// state.result.reply = 'Enough about me. Can we get on with my pizza?';
			state.session.trust += -1;
		}

		++state.session.count_compliment_dress;
	}
	else
	if (state.result.tokens.includes('i_insult'))
	{
		if (state.session.count_insult == 0)
		{
			state.result.code = 'rp_990_30_insulted';
			// state.result.reply = 'Excuse me?';
			state.session.trust += -2;
		}
		else
		{
			state.result.code = 'rp_990_31_insulted_too_much';
			// state.result.reply = 'I think I\'ll go somewhere else for lunch.';
			state.session.trust += -3;
			state.session.game_over = true;
		}

		++state.session.count_insult;
	}
	else
	if (state.result.tokens.includes('i_superinsult'))
	{
		{
			state.result.code = 'rp_990_40_super_insulted';
			// state.result.reply = 'Fuck you and the horse you rode in on.\'m leaving!';
			state.session.trust += -3;
			state.session.game_over = true;
		}

		++state.session.count_insult;
	}
	else
	if (state.result.tokens.includes('e_cuss'))
	{
		{
			state.result.code = 'rp_990_50_cussed_out';
			// state.result.reply = 'I\'m leaving!';
			state.result.direction = 'very insulted';
			state.session.trust += -3;
			state.session.game_over = true;
		}
	}
	else
	if (   state.result.tokens.includes( 'i_smalltalk')
		&& state.result.tokens.includes('sports'))
	{
		{
			state.result.code = 'rp_990_60_smalltalk_sports';
			// state.result.reply = 'I don\'t really follow sports.';
			state.result.direction = 'awkward';
			state.session.trust += 0;
		}
	}
	else
	if (   state.result.tokens.includes( 'i_smalltalk')
		&& state.result.tokens.includes('weather'))
	{
		{
			state.result.code = 'rp_990_60_smalltalk_weather';
			// state.result.reply = 'Um, yeah, I guess so.';
			state.result.direction = 'awkward';
			state.session.trust += 0;
		}
	}
	else
	if (state.result.tokens.includes( 'i_greeting') )
	{
		{
			state.result.code = 'rp_990_90_regreeted';
			// state.result.reply = 'Yeah, we\'ve already met.';
			state.result.direction = 'somewhat annoyed';
			state.session.trust += -1;
		}

		++state.session.count_greeting;
	}
	else
	if (state.result.tokens.includes('e_rude'))
		{
			state.result.code = 'rp_990_70_rude';
			// state.result.reply = 'Um, I not quite comfortable with that.';
			state.session.trust += -1;
		}
	else if (state.result.tokens.includes( 'i_9sec') )
		{
			state.result.code = 'rp_990_86_fed_up';
			// state.result.reply = 'I wont be visiting here again.  Good day.';
		   	state.session.game_over = true;
		}
	else
	// if (state.result.text.includes('unintelligible'))
	{
		{
			let codes =
			[
				"rp_990_80_hard_of_hearing"
				,"rp_990_80_didnt_catch_that"
			];

			// const replies = 
			// [
			// 	'Excuse me. I\'m a little hard of hearing. Can you speak more slowly and clearly, please?',
			// 	'Didn\'t catch that. Can you speak more slowly and clearly?'
			// ];

			state.result.code = codes[randomInt(codes.length - 1)];
			// state.result.code = 'rp_990_80_unintelligible';
			// state.result.reply = replies[randomInt(replies.length - 1)];
			state.session.trust += 0;

			logger.log('_fail_\''+ state.result.text_origin+'\'');


		}
	}

	logger.log('ACT 990 - processed');
};