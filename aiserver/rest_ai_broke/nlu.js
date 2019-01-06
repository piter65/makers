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

// logger.log(JSON.stringify(exports.tokens, null, 4));

exports.process = function(state)
{
	let self = this;

	let matches = [];
	for (let match in self.tokens)
	{
		// matches.push(match+": "+state.result.text.indexOf(match));

		// If the text holds a match, and we don't 
		//   already have the token, add the token.
		if (state.result.text.indexOf(match) > -1)
		{
			matches.push(match+" : "+self.tokens[match]);

			let match_tokens = self.tokens[match].split(' ');
			for (let index_token = 0; index_token < match_tokens.length; ++index_token)
			{
				let token = match_tokens[index_token];
				if (!state.result.tokens.includes(token))
					state.result.tokens.push(token);
			}
		}
	}

	logger.log('---');
	logger.log('NLU - processed:');
	logger.log('Index: %d', (" youve come to right place").indexOf("youve come to right place"));
	logger.log('Matches: %s', JSON.stringify(matches, null, 4));
	logger.log('Tokens: %s', JSON.stringify(state.result.tokens, null, 4));
	logger.log('---');

	return state;
};