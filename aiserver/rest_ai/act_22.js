var logger = require('./logger');
var act_990 = require('./act_990');

exports.process = function(state)
{
   logger.log('ACT 22 - start');


   	if (state.result.entities.includes('e_mushroom') )
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Yeah, thats about right. Ill have a slice of sausage and mushroom';
			state.session.act = 30;  // move on!
		}
   	else if (	
   			state.result.entities.includes('e_meat') ||
   			state.result.entities.includes('e_bird') ||
   			state.result.entities.includes('e_hawaiin') ||
   			state.result.entities.includes('e_fish') 
   		)
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Arent you listening, I want sausage and a veggie';
		}
   	else if (	
   			state.result.entities.includes('e_crap') ||
   			state.result.entities.includes('e_dog') ||
   			state.result.intent== 'i_insult'
   		)
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'I dont like your sense of humour.  Good day.';
			state.session.game_over = true;
		}

   	 else if (	
   			state.result.entities.includes('e_veggie') 
   		)	
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Almost, you know what I think. Ill have a slice of sausage and mushroom';
			state.session.act = 30;  // move on!

		}
	else
	{
		state = act_990.process(state);
	}

	logger.log('ACT 22 - processed');


	return state;
};