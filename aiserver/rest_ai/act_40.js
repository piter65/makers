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
		state.result.code = 'rp_40_finished_good1';
		state.session.game_over = true;
	}

	else if (
		state.result.tokens.includes('e_sausage') &&
		state.result.tokens.includes('e_mushroom')
		)
	{
			state.result.code = 'rp_40_dont_forget';  //"Don't forget glutten free.
			state.session.trust += -1;
			state.session.count_write++;
	}
	else if (state.result.tokens.includes('e_drink'))
	{
		state.result.code = 'rp_20_no_drink';
		state.session.score_listen --;
		state.session.count_write++;
	}
	else if (state.session.count_write<2)
	{
		state.result.code = 'rp_40_write_it'  ;
		state.session.count_write++;
	}

	else
	{
		state.result.code = 'rp_40_restate_order';  //sausage, mushrroom, and glutten free.
	}

};
