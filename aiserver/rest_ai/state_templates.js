exports.session_defaults =
{
	act: 10,
	trust: 0,

	testall: 0,		// set true when doing a test of all scenese. Over-rides all logic.
	testcount: 0,		// index of where in count we are...

	count_compliment_dress: 0,
	count_insult: 0,
	count_greeting: 0,
	count_tries: 0,
	count_write: 0,		// # of times player "wrote down" order and repeated it back.
	num_entries: 0,	// # of player sentences/entries into the system.  newgame sets to 0

// certain bonuses are limited.
	num_polite: 0,
	num_brag: 0,
	num_storebrand: 0,


	veg_tries: 0,
	meat_tries: 0,
	veg_offers: 0,
	meat_offers: 0,

	one_meat_one_veggie_trig: 0,		// This is a context flag set when she says she wants one meat, one veggie.
	one_meat_one_veggie_ctx: 0,		// This is a context flag set when she says she wants one meat, one veggie.


	oops_trig: 0,		// ctx flag for short term apology.  oops, sorry about that.
	oops_ctx: 0,		// 

	order_trig: 0,		// ctx flag for short term apology.  oops, sorry about that.
	order_ctx: 0,		// 


	why_sick_trig: 0,		// 
	why_sick_ctx: 0,		// for the why in a sick

	gluten_saga: 0,
	gluten_crisis: 0,		// set non-zero when gluten problem is a problem.

	score_exec:5,
	score_listen:5,
	score_understand:5,
	score_empathy:5,
	score_overall:0,



	achieve_closedeal:0,

	next_act:5,

	empathy_opportunity:false,
	empathy_scored:false,



	game_over: false,
	

};

exports.result_defaults =
{
	success: false,
	text_origin: null,
	text_1: null,
	text_2: null,
	text_3: null,
	text: null,
	reply: null,
	tokens: [],
	count_intents: 0,
	count_entities: 0,
	direction: null,
	extra:null,
};