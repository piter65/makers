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
			state.session.oops_trig=1;			// opportunity to reduce damage

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
			state.result.code = 'rp_1_thank_you';  // 'Thanks. I got it at .';
	
	}

	else if (  state.result.tokens.includes( 'e_uniform'))
	{
			state.result.code = "rp_1_thats_nice";  // 'Thanks. I got it at .';	
	}
	else if (  state.result.tokens.includes( 'e_storeclean'))
	{
			state.result.code = "rp_10_store_clean";  // 'Thanks. I got it at .';	
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

//	i_desire e_unknown

	else if (f.includesAll(state.result.tokens, 'i_desire','e_unknown'))
	{
		state.result.code = 'rp_1_no_thankyou';  //
	}

	else if (f.includesAll(state.result.tokens, 'e_togo'))
	{
		state.result.code = 'rp_1_togo';  //'
	}

	else if (state.result.tokens.includes( 'i_5sec') )
	{
		state.result.code = 'rp_1_hmmm';  //
	}

	else
	if (state.result.tokens.includes( 'i_9sec') )
	{
		state.result.code = 'rp_1_fed_up';  //'I wont be visiting here again.  Good day.';
		state.session.game_over = true;
	}

	// If we have no tokens at all, fall thru here.
	else if (state.session.empathy_scored)	// Did they get an empathy point?
	{
		state.result.code = 'rp_1_thank_you';
	}

	// look for goofs....
	else if ( (state.session.oops_ctx>0) && (f.includesAll(state.result.tokens, 'i_sorry'))	  )// Did they get an empathy point?
	{
		state.result.code = 'rp_1_no_problem';
	// maybe a score boost, or a score penalty if not?
	}

	else if (f.hasAny(state.result.tokens, 'i_affirm','e_pretty'))
	{
		state.result.code = 'rp_1_ok';  //'The dreaded ok loop';
	}

	else if (state.result.tokens.length > 4)	// if many tokens recognized
	{
		state.result.code = 'rp_1_not_get_your_point';  //';
	}

	else if (state.result.tokens.length > 1)	// if 2 tokens recognized
	{
		state.result.code = 'rp_1_hmmm';  //'The dreaded ok loop';
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