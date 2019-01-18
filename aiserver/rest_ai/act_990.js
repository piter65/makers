var logger = require('./logger');
var randomInt = require('random-int');
const f = require('./func');

exports.process = function(state)
{
	logger.log('ACT 990 - start');

	if (   state.result.tokens.includes( 'i_compliment') )
	{
		if (state.session.count_compliment_dress <3 )
		{
			state.result.code = 'rp_990_complimented';  // 'Thanks. I got it at Brooks Brothers.';
			logger.log('compliment logged');
		}
		else
		{
			state.result.code = 'rp_990_complimented_too_much'; // 'Enough about me. How about my pizza?';
			state.session.trust += -1;
		}
//		++state.session.count_compliment_dress;
	}



	else
	if (state.result.tokens.includes('i_insult'))
	{
		if (state.session.count_insult == 0)
		{
			state.result.code = 'rp_990_insulted';  //'Excuse me?';
			state.session.trust += -2;
			state.session.score_understand-=2;
		}
		else
		{
			state.result.code = 'rp_990_insulted_too_much';   // 'I think I'll go somewhere else for lunch.';
			state.session.game_over = true;
			state.session.score_exec-=2;
		}

		++state.session.count_insult;
	}

	else if (  state.result.tokens.includes( 'i_heart')
					&&
		state.result.tokens.includes( 'e_bodynice')
		)
	{
			state.result.code = 'rp_990_thankyou';  // 'Thanks. I got it at .';
	
	}


	else if (state.result.tokens.includes('i_nopizza'))
	{
		state.result.code = 'rp_990_insulted';  //'Excuse me?';
		state.session.score_understand-=2;
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
			state.session.score_exec=0;
			state.session.score_listen-=2;
			state.session.score_understand-=2;

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
		}
	}
	else
	if (state.result.tokens.includes( 'i_greeting') )
	{
		// if (state.session.count_greeting> 1)	// only give boost in act 30.
		// {
		// 	state.result.code = 'rp_990_regreeted';
		// }

		// BChance: Above commented because apparently we can reach point 
		//   'count_greeting' is 0, which leaves us with no code.
		state.result.code = 'rp_990_regreeted';
		state.session.trust += 1;
		++state.session.count_greeting;
	}
	else
	if (state.result.tokens.includes('e_rude'))
	{
		state.result.code = 'rp_990_rude';  // 'Um, I not quite comfortable with that.';

	}
	else
	if (state.result.tokens.includes( 'i_9sec') )
	{
		state.result.code = 'rp_990_fed_up';  //'I wont be visiting here again.  Good day.';
		state.session.game_over = true;
	}
	// If we have any tokens at all, fall thru here.
	else if (state.session.empathy_scored)	// Did they get an empathy point?
	{
		state.result.code = 'rp_1_thank_you';
	}

	else if (state.result.tokens.length > 0)
	{
		state.result.code = 'rp_990_nonseq';  // not germane.
	}

	// Input not understood.
	else
	{
		state.result.code = 'rp_999_wut';  // hard of hearing
		logger.log('_fail_\''+ state.result.text_origin+'\'');
	}

	logger.log('ACT 990 - processed');
	logger.log('state.result.code: "%s"', state.result.code);
};