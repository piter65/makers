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
			state.session.trust += 1;
		}
		else
		{
			state.session.trust += -1;
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
		state.session.trust += -1;
	}

	logger.log('ACT 990 - processed');
};