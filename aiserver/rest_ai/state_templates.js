exports.session_defaults =
{
	act: 10,
	trust: 0,
	count_compliment_dress: 0,
	count_insult: 0,
	count_greeting: 0,
	count_tries: 0,
	count_write: 0,		// # of times player "wrote down" order and repeated it back.
	num_entries: 0,	// # of player sentences/entries into the system.  newgame sets to 0


	veg_tries: 0,
	meat_tries: 0,
	veg_offers: 0,
	meat_offers: 0,

	one_meat_one_veggie_ctx: 0,		// This is a context flag set when she says she wants one meat, one veggie.

	gluten_saga: 0,

	score_exec:5,
	score_listen:5,
	score_understand:5,
	score_empathy:5,



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