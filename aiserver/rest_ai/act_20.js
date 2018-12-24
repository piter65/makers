var logger = require('./logger');
var act_990 = require('./act_990');

exports.process = function(state)
{
   logger.log('ACT 20 - start');
/*
	if (true)
	{
		{
			state.result.code = 'rp_20_00';
			state.result.reply = 'You made it act 20! Whoooo!';
			state.result.direction = 'happy';
			state.session.trust += 10;
		}
	}
*/

	if (state.result.entities.includes('hawaiin'))
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Yech- way too sweet for me.';
			state.session.trust += 1;
		}
	else if (state.result.entities.includes('combo'))
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Too much stuff.  Something simpler.';
			state.session.trust -= 1;
		}
	else if (state.result.entities.includes('crap'))
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Maybe you like that type of thing, but not for me.';
			state.session.trust -= 1;
		}
	else if (state.result.entities.includes('fish'))
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Fish and pizza do not go together.';
			state.session.trust -= 1;
		}
	else if (state.result.entities.includes('meat'))
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Some meat sounds good.  Maybe sausage and some veggie?';
			state.session.trust -= 1;
			state.session.act = 22;  // move on!

		}
	else if (state.result.entities.includes('dog'))
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'You gotta be jokiing, no one eats a dog pizza.';
			state.session.trust -= 1;
		}
	else if (state.result.entities.includes('bird'))
		{
			state.result.code = 'rp_10_30';
			state.result.reply = 'Birds of a feather, flock together, and I will eat that pizza- NEVER!';
			state.session.trust -= 1;
		}



	else if (state.result.entities.includes('discover'))
		{
			state.result.code = 'rp_20_20';
			state.result.reply = 
'You know, I do not usually eat pizza so it has been a while, but lets see. How about sausage and a veggie?';
			state.session.trust -= 1;
		}
	else
	{
		state = act_990.process(state);
	}

	logger.log('ACT 20 - processed');


	return state;
};