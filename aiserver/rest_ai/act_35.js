var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');

// Ok, this is the gluten free sub act. 

exports.process = function(state)
{
   logger.log('ACT 35 - start');


//  	if (state.result.tokens.includes('e_close') ||

   	if (state.result.tokens.includes( 'i_5sec') )
	{
		state.result.code = 'rp_30_time_to_reconsider';
		// state.result.reply = "I'm changing my mind,  last time I had pizza, I think I had a bad reaction.  Im suspicious it might be the gluten.";
		state.session.trust -= 2;
		state.session.act = 32;  // move on!

	}
   	else if (true)
   	{
		state.result.code = 'rp_30_remember_gluten';
		// state.result.reply = "Now, but come to think of it, last time I had pizza, I think I had a bad reaction.  Im suspicious it might be the gluten."
		state.session.act = 32;  // move on!
   	}

	else
	{
		act_990.process(state);
	}

	
	logger.log('ACT 30 - processed');
};