const logger = require('./logger');
const fs = require('fs');

// exports.intents =
// [
// 	'i_offerhelp',
// 	'i_greeting',
// 	'i_decide',
// 	'i_reveal',
// 	'i_compliment',
// 	'i_suggest',
// 	'i_discover',
// 	'i_dietary',
// 	'i_empathy',
// 	'i_thankyou',
// 	'i_brag',
// 	'i_like',
// 	'i_insult',
// 	'i_nothing',
// 	'i_sorry',
// 	'i_nopizza',
// 	'i_5sec',
// 	'i_9sec',


// ];

// exports.entities =
// [
// 	'e_pizza',
// 	'e_pizzeria',
// 	'e_hawaiin',
// 	'e_fish',
// 	'e_combo',
// 	'e_bird',
// 	'e_meat',
// 	'e_veggie',
// 	'e_sausage',
// 	'e_mushroom',
// 	'e_topping',
// 	'e_herbs',
// 	'e_dog',
// 	'e_rude',
// 	'e_crap',
// 	'e_cuss',
// 	'e_noglut',

// ];


// Load 'tokens.json'.
exports.tokens = JSON.parse(fs.readFileSync('tokens.json'));

exports.process = function(state)
{
	let self = this;
	// logger.log('nlu: %s', JSON.stringify(self, null, 4));

	for (let match in self.tokens)
	{
		// If the text holds a match, and we don't 
		//   already have the token, add the token.
		if (state.result.text.includes(match))
		{
			let token = self.tokens[match];
			if (!state.result.tokens.includes(token))
				state.result.tokens.push(token);
		}
	}

	// for (var index_intent = 0; index_intent < self.intents.length; ++index_intent)
	// {
	// 	var intent = self.intents[index_intent];
	// 	if (state.result.text.includes(intent))
	// 		state.result.tokens.push(intent);
	// }

	// for (var index_entity = 0; index_entity < self.entities.length; ++index_entity)
	// {
	// 	var entity = self.entities[index_entity];
	// 	if (state.result.text.includes(entity))
	// 		state.result.tokens.push(entity);
	// }

	logger.log('NLU - processed:');
	// logger.log('\tIntent: %s', state.result.intent);
	logger.log('\tTokens: %s', JSON.stringify(state.result.tokens).replace('\n', '\n\t'));

	return state;
};