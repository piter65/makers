const logger = require('./logger');
const fs = require('fs');
const _ = require('underscore');

// Load 'tokens.json'.
exports.tokens = JSON.parse(fs.readFileSync('tokens.json'));

// logger.log(JSON.stringify(exports.tokens, null, 4));

exports.process = function(state)
{
	let self = this;

	let matches = [];
	for (let match in self.tokens)
	{
		// If the text holds a match, and we don't 
		//   already have the token, add the token.
		let index_match = state.result.text.indexOf(match);
		if (index_match > -1)
		{
			let match_entry =
			{
				index: index_match,
				match: match,
				tokens: self.tokens[match].split(' ')
			}

			// Insert the entry into the matches list using 
			//   a binary sort to keep things ordered.
			let index_insert = _.sortedIndex(matches, match_entry, 'index');
			matches.splice(index_insert, 0, match_entry);
		}
	}

	// Loop thru the matches and add them to tokens list if they aren't already present.
	for (let index_match = 0; index_match < matches.length; ++index_match)
	{
		let match_tokens = matches[index_match].tokens;
		for (let index_token = 0; index_token < match_tokens.length; ++index_token)
		{
			let token = match_tokens[index_token];
			if (!state.result.tokens.includes(token))
			{
				state.result.tokens.push(token);

				// Increment the counts of the entities and intents
				if (token.indexOf('e_') == 0)
					++state.result.count_entities;
				else
				if (token.indexOf('i_') == 0)
					++state.result.count_intents;
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