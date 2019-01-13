var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');


// Ok, this is the gluten free prelude  
// The AI just decided on sausage and mushroom,
// on any input, the AI changes her mind.

// Now we "seed" the script with "Oh yeah, I got sick last time"
// I thought this would be "normal path"

exports.process = function(state)
{
   logger.log('ACT 30 - start');
// Note -we should check for profanity or game over options...

// If they say I'll write that up.

	if ( state.result.tokens.includes('i_close') ||
		 state.result.tokens.includes('e_confidence') 
		)
	{
		state.session.score_exec++;
		state.result.extra=":exec boost";
	}
    if (true)
   	{
		state.result.code = 'rp_30_remember_gluten';		// last time I got sick..
		state.session.next_act=40;	// come back here
		state.session.act = 32;  // move to glutten decided!  move on!	
		state.session.empathy_opportunity = true;  // open to empathy	
   	}
/*
	else
	{
		act_990.process(state);
	}
*/
	
	logger.log('ACT 30 - processed');
};