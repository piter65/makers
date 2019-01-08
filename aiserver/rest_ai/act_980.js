var logger = require('./logger');
var randomInt = require('random-int');

// act 98 contains just words for scoring-
// should be called even if phrase was already mentioned.
exports.process = function(state)
{
	logger.log('ACT 98 - start');

	if (   state.result.tokens.includes( 'i_compliment') )
	{
		if (state.session.count_compliment_dress == 0)
		{
			state.session.empathy += 1;
		}
		else
		{
			state.session.empathy += -1;
		}
		++state.session.count_compliment_dress;
	}
	
	if (state.result.tokens.includes('i_confidence'))
	{
		state.session.score_exec++;
	}
	
	if (state.result.tokens.includes('i_brag'))
	{
		state.session.score_exec++;
	}

	if (state.result.tokens.includes('i_storebrand'))
	{
		state.session.score_exec++;
	}
	if (state.result.tokens.includes('e_rude'))
	{
		state.session.score_exec-=2;

	}
	if (state.result.tokens.includes('e_bbrother'))
	{
		if (state.session.act == 10)	// only give boost in act 10.
		{
			state.session.score_listen++;

		}
	}
	if ( 
		state.result.tokens.includes('e_shock') ||
        state.result.tokens.includes('e_empathy')
		)
	{
		if ( (state.session.act > 29) && (state.session.act < 40))	// only give boost in act 30- glutten
		{
			state.session.score_listen++;
			state.session.score_empathy+=2;
		}
	}




	logger.log('ACT 980 - processed');
};