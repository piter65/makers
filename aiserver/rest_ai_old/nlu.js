var logger = require('./logger');


// Questions for Brent,
// Should we consider an intent list, and an entity list, and looping through?
// Also, long term, we're gonna need multiple intents and entities, so we probably don't need the elses
// Ideally tied together.

exports.process = function(state)
{
	if (state.result.text.includes('offerhelp'))
	{
		state.result.intent = 'offerhelp';
	}
	else
	if (state.result.text.includes('greeting'))
	{
		state.result.intent = 'greeting';
	}
	else
	if (state.result.text.includes('decide'))
	{
		state.result.intent = 'decide';
	}
	else
	// Seems like 'what' should result in 'decide'.
	if (state.result.text.includes('what'))
	{
		state.result.intent = 'decide';
	}
	else
	if (state.result.text.includes('reveal'))
	{
		state.result.intent = 'reveal';
	}
	else
	if (state.result.text.includes('compliment'))
	{
		state.result.intent = 'compliment';
	}
	else
	if (state.result.text.includes('suggest'))
	{
		state.result.intent = 'suggest';
	}
	else
	if (state.result.text.includes('discover'))
	{
		state.result.intent = 'discover';
	}
	else
	if (state.result.text.includes('dietary'))
	{
		state.result.intent = 'dietary';
	}
	else
	if (state.result.text.includes('empathy'))
	{
		state.result.intent = 'empathy';
	}

	if (state.result.text.includes('thankyou'))
	{
		state.result.intent = 'thankyou';
	}

	if (state.result.text.includes('craving'))
	{
		state.result.entities.push('craving');
	}
	if (state.result.text.includes('pizza'))
	{
		state.result.entities.push('pizza');
	}
	if (state.result.text.includes('pizzeria'))
	{
		state.result.entities.push('pizzeria');
	}
	if (state.result.text.includes('brag'))
	{
		state.result.entities.push('brag');
	}
	if (state.result.text.includes('fine'))
	{
		state.result.entities.push('fine');
	}
	if (state.result.text.includes('like'))
	{
		state.result.entities.push('like');
	}
	if (state.result.text.includes('hawaiin'))
	{
		state.result.entities.push('hawaiin');
	}
	if (state.result.text.includes('fish'))
	{
		state.result.entities.push('fish');
	}
	if (state.result.text.includes('meat'))
	{
		state.result.entities.push('meat');
	}
	if (state.result.text.includes('dog'))
	{
		state.result.entities.push('dog');
	}
	if (state.result.text.includes('crap'))
	{
		state.result.entities.push('crap');
	}
	if (state.result.text.includes('cuss'))
	{
		state.result.entities.push('cuss');
	}
	if (state.result.text.includes('insult'))
	{
		state.result.entities.push('insult');
	}
	if (state.result.text.includes('rude'))
	{
		state.result.entities.push('rude');
	}

	logger.log('NLU - processed:');
	logger.log('\tIntent: %s', state.result.intent);
	logger.log('\tEntities: %s', JSON.stringify(state.result.entities).replace('\n', '\n\t'));

	return state;
};