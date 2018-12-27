var logger = require('./logger');
var act_990 = require('./act_990');

// In this act, the AI has decided on the sausage, but is not sure of the veggie.

exports.process = function(state)
{
   logger.log('ACT 22 - start');


   	if (state.result.entities.includes('e_mushroom')
   							||
				(state.session.count_tries>=3)
   	 )
		{
			state.result.code = 'rp_22_99';
			state.result.reply = 'Yeah, thats about right. Ill have a slice of sausage and mushroom';
			state.session.act = 30;  // move on!
			state.choicedone = true;
		}
   	else if (	
   			state.result.entities.includes('e_meat') ||
   			state.result.entities.includes('e_bird') ||
   			state.result.entities.includes('e_hawaiin') ||
   			state.result.entities.includes('e_fish') 
   		)
		{
			state.result.code = 'rp_22_99';
			state.result.reply = 'Arent you listening, I want sausage and a veggie';
			state.session.count_tries++;
		}
   	else if (	
   			state.result.entities.includes('e_crap') ||
   			state.result.entities.includes('e_dog') ||
   			state.result.entities.includes( 'i_insult' )
   		)
		{
			state.result.code = 'rp_22_99';
			state.result.reply = 'I dont like your sense of humour.  Good day.';
			state.session.game_over = true;
		}

   	 else if (	
   			state.result.entities.includes('e_veggie') 
   		)	
		{
			state.result.code = 'rp_22_99';
			state.result.reply = 'Almost, you know what I think. Ill have a slice of sausage and mushroom';
			state.session.act = 30;  // move on!
			state.choicedone = true;

		}
	else
	{
		state = act_990.process(state);
	}

	logger.log('ACT 22 - processed');


	return state;
};