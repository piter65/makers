var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');
const f = require('./func');

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
		state.session.score_exec  --;
		state.session.count_write++;
	}

	else if (
			state.result.tokens.includes('e_meat')			||
			state.result.tokens.includes('e_veggies')	||
			state.result.tokens.includes('e_toppings')	||
			state.result.tokens.includes('e_hawaiin')	||
			state.result.tokens.includes('e_fish')	||
			state.result.tokens.includes('e_bird')	
		)
	{

		if (state.session.count_write>=3)
		{
			state.result.code = 'rp_990_angry_leaving'  ;
			state.session.score_listen=0;
			state.session.score_exec-=2;
			state.session.game_over = true;
		}
	else 
		{
			state.result.code = 'rp_40_restate_order';  //how hard can it be? sausage, mushrroom, and glutten free.
			state.session.score_listen --;
			state.session.score_exec  --;
			state.session.count_write++;		
		}

	}
	else if (state.session.count_write<1)
	{
		state.result.code = 'rp_40_write_it'  ;
		state.session.count_write++;
	}

	else 
	{
		state.result.code = 'rp_40_restate_order';  //how hard can it be? sausage, mushrroom, and glutten free.
		state.session.count_write++;	
	}

};