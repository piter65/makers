var logger = require('./logger');


// Questions for Brent,
// Should we consider an intent list, and an entity list, and looping through?
// Also, long term, we're gonna need multiple intents and entities, so we probably don't need the elses
// Ideally tied together.

exports.process = function(state)
{
	if (state.result.text.includes('i_offerhelp'))
	{
		state.result.intent = 'i_offerhelp';
	}
	else
	if (state.result.text.includes('i_greeting'))
	{
		state.result.intent = 'i_greeting';
	}
	else
	if (state.result.text.includes('i_decide'))
	{
		state.result.intent = 'i_decide';
	}
	else
	// Seems like 'what' should result in 'decide'.
	if (state.result.text.includes('what'))
	{
		state.result.intent = 'i_decide';
	}
	else
	if (state.result.text.includes('i_reveal'))
	{
		state.result.intent = 'i_reveal';
	}
	else
	if (state.result.text.includes('i_compliment'))
	{
		state.result.intent = 'i_compliment';
	}
	else
	if (state.result.text.includes('i_suggest'))
	{
		state.result.intent = 'i_suggest';
	}
	else
	if (state.result.text.includes('i_discover'))
	{
		state.result.intent = 'i_discover';
	}
	else
	if (state.result.text.includes('i_dietary'))
	{
		state.result.intent = 'i_dietary';
	}
	else
	if (state.result.text.includes('i_empathy'))
	{
		state.result.intent = 'i_empathy';
	}

	if (state.result.text.includes('i_thankyou'))
	{
		state.result.intent = 'i_thankyou';
	}

	if (state.result.text.includes('e_pizza'))
	{
		state.result.entities.push('e_pizza');
	}
	if (state.result.text.includes('e_pizzeria'))
	{
		state.result.entities.push('e_pizzeria');
	}
	if (state.result.text.includes('i_brag'))
	{
		state.result.entities.push('i_brag');
	}
	if (state.result.text.includes('like'))
	{
		state.result.entities.push('like');
	}
	if (state.result.text.includes('e_hawaiin'))
	{
		state.result.entities.push('e_hawaiin');
	}
	if (state.result.text.includes('e_fish'))
	{
		state.result.entities.push('e_fish');
	}

	if (state.result.text.includes('e_combo'))
	{
		state.result.entities.push('e_combo');
	}

	if (state.result.text.includes('e_bird'))
	{
		state.result.entities.push('e_bird');
	}

	if (state.result.text.includes('e_meat'))
	{
		state.result.entities.push('e_meat');
	}

	if (state.result.text.includes('e_veggie'))
	{
		state.result.entities.push('e_veggie');
	}

	if (state.result.text.includes('e_sausage'))
	{
		state.result.entities.push('e_sausage');
	}

	if (state.result.text.includes('e_mushroom'))
	{
		state.result.entities.push('e_mushroom');
	}

	if (state.result.text.includes('e_topping'))
	{
		state.result.entities.push('e_topping');
	}

	if (state.result.text.includes('e_herbs'))
	{
		state.result.entities.push('e_herbs');
	}

	if (state.result.text.includes('e_dog'))
	{
		state.result.entities.push('e_dog');
	}
	if (state.result.text.includes('e_crap'))
	{
		state.result.entities.push('e_crap');
	}
	if (state.result.text.includes('e_cuss'))
	{
		state.result.entities.push('e_cuss');
	}
	if (state.result.text.includes('i_insult'))
	{
		state.result.entities.push('i_insult');
	}
	if (state.result.text.includes('i_rude'))
	{
		state.result.entities.push('i_rude');
	}
	if (state.result.text.includes('i_nothing'))
	{
		state.result.entities.push('i_nothing');
	}

	logger.log('NLU - processed:');
	logger.log('\tIntent: %s', state.result.intent);
	logger.log('\tEntities: %s', JSON.stringify(state.result.entities).replace('\n', '\n\t'));

	return state;
};