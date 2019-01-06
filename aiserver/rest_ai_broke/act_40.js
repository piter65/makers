var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');

// Ok, close the deal.  Ideally player repeats order


exports.process = function(state)
{
	logger.log('ACT 40 - start pa');

	if (state.result.tokens.includes('i_nogluten')&&
		state.result.tokens.includes('e_sausage')&&
		state.result.tokens.includes('e_mushroom')
		)

	{
		state.result.code = 'rp_40_finished';
	}

	else if (
		state.result.tokens.includes('e_sausage') &&
		state.result.tokens.includes('e_mushroom')
		)
	{
			state.result.code = 'rp_40_dont_forget';  //"Don't forget glutten free.
			state.session.trust += -1;
	}
	else if (state.result.tokens.includes('e_drink'))
	{
		state.result.code = 'rp_20_no_drink';
		state.session.trust --;
	}


	else 
	{
		state.result.code = 'rp_40_restate_order';  //sausage, mushrroom, and glutten free.
	}
	// Decode the reply.
	state.result.reply = decoder.decode_reply(state.result.code);
};