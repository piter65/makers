var logger = require('./logger');
const decoder = require('./decoder');
var act_990 = require('./act_990');
const f = require('./func');

// Ok, close the deal.  Ideally player repeats order


exports.process = function(state)
{
	logger.log('ACT 40 - start pa');

	if (f.hasAll(state.result.tokens, 'e_nogluten','e_sausage','e_mushroom')
							&&
		(!f.hasAny(state.result.tokens, 'e_meat','e_veggie'))
		)
	{

		if (state.session.count_write==0)
					state.session.score_overcome += 2;	// succeeded overcoming objections...

// approved methodology 2/10a   - refigure before final
		state.session.score_overall = 
			(state.session.score_exec*100)+
			(state.session.score_listen*250)+	
			(state.session.score_discovery*350)+
			(state.session.score_empathy*150)+
			(state.session.score_overcome*100)+
			(state.session.score_language*50);


		if (state.session.score_overall>5500) state.result.code = 'rp_go_finished_good1';
		else if (state.session.score_overall>5250) state.result.code = 'rp_go_finished_good2';
		else if (state.session.score_overall>=5000) state.result.code = 'rp_go_finished_med1';
		else if (state.session.score_overall>4750) state.result.code = 'rp_go_finished_med2';
		else if (state.session.score_overall>4500) state.result.code = 'rp_go_finished_bad1';
		else  state.result.code = 'rp_go_finished_bad2';
		state.session.game_over = true;

	}
	else if (state.session.count_write>=3)
		{
			state.result.code = 'rp_go_angry_leaving'  ;
			state.session.score_listen=0;
			state.session.score_exec-=2;
			state.session.game_over = true;
		}

	else if (
		state.result.tokens.includes('e_sausage') &&
		state.result.tokens.includes('e_mushroom') &&
		(state.session.count_write<2)				// early, 2 x.
		)
	{
			state.result.code = 'rp_40_dont_forget';  //"Don't forget glutten free.
			state.session.trust --;
			state.session.score_listen --;
			state.session.count_write++;	
	}
	else if (state.result.tokens.includes('e_drink'))
	{
		state.result.code = 'rp_40_no_drink';
		state.session.score_listen--;
		state.session.score_exec--;
		state.session.count_write++;
	}

	else if (
			state.result.tokens.includes('e_meat')		||
			state.result.tokens.includes('e_veggies')	||
			state.result.tokens.includes('e_toppings')	||
			state.result.tokens.includes('e_hawaiin')	||
			state.result.tokens.includes('e_fish')	||
			state.result.tokens.includes('e_bird')	
		)
	{
			state.result.code = 'rp_40_restate_order';  //how hard can it be? sausage, mushrroom, and glutten free.
	
			state.session.score_listen--;
			state.session.score_exec--;
			state.session.score_discovery--;

			state.session.count_write++;	
	}
	else if (state.session.count_write<2)
	{
		state.result.code = 'rp_40_write_it'  ;
		state.session.score_discovery--;

		state.session.count_write++;
	}

	else 
	{
		state.result.code = 'rp_40_restate_order';  //how hard can it be? sausage, mushrroom, and glutten free.
	
		state.session.score_listen--;
		state.session.score_exec--;
		state.session.score_discovery--;

		state.session.count_write++;		
	}

};