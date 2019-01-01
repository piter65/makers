var logger = require('./logger');
var randomInt = require('random-int');

exports.process = function(state)
{
	logger.log('ACT 99 - start');

	if (   state.result.tokens.includes( 'i_compliment') )
	{
		if (state.session.count_compliment_dress == 0)
		{
			state.result.code = 'rp_990_complimented';  // 'Thanks. I got it at Brooks Brothers.';
			state.session.trust += 1;
			logger.log('compliment logged');
		}
		else
		{
			state.result.code = 'rp_990_complimented_too_much'; // 'Enough about me. How about my pizza?';
			state.session.trust += -1;
		}

		++state.session.count_compliment_dress;
	}
	else
	if (state.result.tokens.includes('i_insult'))
	{
		if (state.session.count_insult == 0)
		{
			state.result.code = 'rp_990_insulted';  //'Excuse me?';
			state.session.trust += -2;
		}
		else
		{
			state.result.code = 'rp_990_insulted_too_much';   // 'I think I'll go somewhere else for lunch.';
			state.session.trust += -3;
			state.session.game_over = true;
		}

		++state.session.count_insult;
	}
	else
	if (state.result.tokens.includes('i_superinsult'))
	{
		{
			state.result.code = 'rp_990_super_insulted';  // 'Screw you and the horse you rode in on.\'m leaving!';
			state.session.trust += -3;
			state.session.game_over = true;
		}

		++state.session.count_insult;
	}
	else
	if (state.result.tokens.includes('e_cuss'))
	{
		{
			state.result.code = 'rp_990_cussed_out';  //'I\'m leaving!';
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
			state.result.code = 'rp_990_smalltalk_sports';  //  'I don\'t really follow sports.';
			state.result.direction = 'awkward';
			state.session.trust += 0;
		}
	}
	else
	if (   state.result.tokens.includes( 'i_smalltalk')
		&& state.result.tokens.includes('weather'))
	{
		{
			state.result.code = 'rp_990_smalltalk_weather';   // 'Um, yeah, I guess so.';
			state.result.direction = 'awkward';
			state.session.trust += 0;
		}
	}
	else
	if (state.result.tokens.includes( 'i_greeting') )
	{
		{
			state.result.code = 'rp_990_regreeted';  //'Yeah, we\'ve already met.';
			state.result.direction = 'somewhat annoyed';
			state.session.trust += -1;
		}

		++state.session.count_greeting;
	}
	else
	if (state.result.tokens.includes('e_rude'))
	{
		state.result.code = 'rp_990_rude';  // 'Um, I not quite comfortable with that.';
		state.session.trust += -1;
	}
	else
	if (state.result.tokens.includes( 'i_9sec') )
	{
		state.result.code = 'rp_990_fed_up';  //'I wont be visiting here again.  Good day.';
		state.session.game_over = true;
	}
	// If we have any tokens at all, fall thru here.
	else
	if (state.result.tokens.length > 0)
	{
		state.result.code = 'rp_990_nonseq';  // not germane.
		state.session.game_over = true;
	}

	// Input not understood.
	else
	{
			state.result.code = 'rp_990_not_understand';  // hard of hearing
			logger.log('_fail_\''+ state.result.text_origin+'\'');
	}

	logger.log('ACT 990 - processed');
};