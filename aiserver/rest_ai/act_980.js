var logger = require('./logger');
var randomInt = require('random-int');

// act 98 contains just words for scoring-
// should be called even if phrase was already mentioned.
exports.process = function(state)
{
	logger.log('ACT 98 - start');

// clear out any one time scoring opportunities...
	state.session.empathy_scored=false;

	if (   state.result.tokens.includes( 'i_compliment') )
	{
		if (state.session.count_compliment_dress <2)
		{
			state.session.score_empathy += 1;
			state.result.extra=":compliment boost";
		}
		else
		{
			state.session.score_empathy += -1;
			state.result.extra=":enough already";	
		}
		++state.session.count_compliment_dress;
	}
	
// i like your haircut
	if (  state.result.tokens.includes( 'i_heart')
					&&
		state.result.tokens.includes( 'body_nice')
		)
	{
		if (state.session.count_compliment_dress <2)
		{
			state.session.score_empathy += 1;
			state.result.extra=":compliment boost";
		}
		else
		{
			state.session.score_empathy += -1;
			state.result.extra=":enough already";	
		}
		++state.session.count_compliment_dress;
	}

	if (state.result.tokens.includes('i_confidence'))
	{
		state.session.score_exec++;
		state.result.extra=":exec boost";
	}
	
	if (state.result.tokens.includes('e_storebrand'))
	{
		state.session.score_exec++;
		state.result.extra=":storebrand boost";

	}
	if (state.result.tokens.includes('i_brag'))
	{
		state.session.score_exec++;
		state.result.extra=":brag boost";
	}



	if (state.result.tokens.includes('e_rude'))
	{
		state.session.score_exec-=2;
		state.session.score_empathy-=2;
		state.result.extra=":rudeness drop";
	}

	if (state.result.tokens.includes('i_insult'))
	{
		state.session.score_exec-=2;
		state.session.score_empathy-=2;		
		state.result.extra=":empathy drop";
	}


	if (state.result.tokens.includes('e_bbrother'))
	{
		if (state.session.act == 10)	// only give boost in act 10.
		{
			state.session.score_listen++;
			state.result.extra=":listen boost";

		}
	}
	if (state.session.empathy_opportunity)	// only give boost if appropriate
	{
		if ( 
			state.result.tokens.includes('e_shock') ||
       		state.result.tokens.includes('e_empathy') ||
        	state.result.tokens.includes('e_nofun')
        	)
			{
// Player got it!
			state.session.score_listen++;
			state.session.score_empathy+=2;
			state.result.extra=":empathy boost";
			state.session.empathy_scored=true;	// so other logic knows...
			}
		else // you blew it...
			{
			state.session.score_empathy--;
			}
		state.session.empathy_opportunity=false;	// opportunity came and went
	}
//	state.result.extra="::did act 980";

	logger.log('state.result.code: "%s"', state.result.code);

	logger.log('ACT 980 - processed');
};