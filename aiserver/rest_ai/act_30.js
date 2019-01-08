var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');


// Ok, this is the gluten free act.  The AI just decided on sausage and mushroom.   Wish us luck....


exports.process = function(state)
{
   logger.log('ACT 30 - start');


//  	if (state.result.tokens.includes('e_close') ||

   	if (state.result.tokens.includes( 'i_5sec') )
	{
		state.result.code = 'rp_30_time_to_reconsider';  // I think I should move on...

		state.session.next_act=40;	// come back here
		state.session.act = 32;     // move to glutten decided!  move on!		

	}
   	else if (true)
   	{
		state.result.code = 'rp_30_remember_gluten';		// last time I got sick..
		state.session.next_act=40;	// come back here
		state.session.act = 32;  // move to glutten decided!  move on!		
   	}

	else
	{
		act_990.process(state);
	}

	
	logger.log('ACT 30 - processed');
};