var logger = require('./logger');
var act_990 = require('./act_990');

// Ok, this is the gluten free act.  The AI just decided on sausage and mushroom.   Wish us luck....


exports.process = function(state)
{
   logger.log('ACT 30 - start');


//  	if (state.result.entities.includes('e_close') ||
   	if (true)
   	{
	state.result.code = 'rp_30_00';
	state.result.reply =
	"Now, but come to think of it, last time I had pizza, I think I had a bad reaction.  Im suspicious it might be the gluten."
	state.session.act = 32;  // move on!
   	}


	else
	{
		state = act_990.process(state);
	}
	logger.log('ACT 30 - processed');


	return state;
};