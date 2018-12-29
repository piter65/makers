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
		state.result.code = 'rp_30_99_time_to_reconsider';
		// state.result.reply = "I'm changing my mind,  last time I had pizza, I think I had a bad reaction.  Im suspicious it might be the gluten.";
		state.session.trust -= 2;
		state.session.act = 32;  // move on!

	}
   	else if (true)
   	{
		state.result.code = 'rp_30_99_considering_gluten';
		// state.result.reply = "Now, but come to think of it, last time I had pizza, I think I had a bad reaction.  Im suspicious it might be the gluten."
		state.session.act = 32;  // move on!
   	}

	else
	{
		act_990.process(state);
	}

	// Decode the reply.
	state.result.reply = decoder.decode_reply(state.result.code);
	
	logger.log('ACT 30 - processed');
};