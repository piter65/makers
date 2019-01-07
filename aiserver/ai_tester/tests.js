var tests_origin =
[
	{input:"INITIAL TEST",reply:null}, {input:"newgame",reply:"rp_5_intro"},
	{input:"hello",reply:"rp_10_first_time"},
	{input:"what you want",reply:"rp_10_offeredhelp"},
	{input:"mushrooms",reply:"rp_20_decided_mushrooms"},
	{input:"sausage",reply:"rp_24_correct"},
	{input:"sausage",reply:"rp_30_remember_gluten"},
	{input:"gluten free option",reply:"rp_32_decided_nogluten"},
	{input:"alright",reply:"rp_40_restate_order"},
	{input:"one slice sausage mushrooms no gluten",reply:"rp_40_finished"},


	{input:"TEST NEWGAME WITH DIFFERENT PATH",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
	{input:"youre looking good too",reply:"rp_990_complimented"},
	{input:"may I have your order",reply:"rp_10_offeredhelp"},
	{input:"sausage",reply:"rp_20_decided_sausage"},
	{input:"and meatball",reply:"rp_22_frustrated"},
	{input:"just kidding, how about sausage and mushrooms",reply:"rp_22_correct"},
	{input:"ok",reply:"rp_30_remember_gluten"},
	{input:"gluten free option",reply:"rp_32_decided_nogluten"},
	{input:"alright",reply:"rp_40_restate_order"},
	{input:"one slice sausage mushrooms with extra gluten",reply:"rp_40_dont_forget"},
	{input:"one slice sausage mushrooms without gluten",reply:"rp_40_finished"},

	{ input:"TEST NEWGAME WITH INSULTS",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},

	{input:"hey there fatso.  Want some pizza",reply:"rp_990_insulted"},
	{input:"Your thighs are telling me you've had enough pizza.",reply:"rp_990_insulted"},
	{input:"You are just plain fat.",reply:"rp_990_insulted"},
	{input:"I think you are stinky.",reply:"rp_990_insulted"},
	{input:"I think you smell bad.",reply:"rp_990_insulted"},

	{ input:"TEST NEWGAME WITH NICE STUFF",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},

	{ input:"you look nice too",reply:"rp_990_complimented" },
	{ input:"you look cool too",reply:"rp_990_complimented"},
	{ input:"i like your outfit",reply:"rp_990_complimented"},

	{ input:"may I take your order",reply:"rp_10_offeredhelp"},
	{ input:"how about a hawaiin",reply:"rp_20_considering_hawaiin"},
	
	{ input:"TEST NEWGAME WITH KNOWN BROKEN SHOULD BE FIXED",reply:null},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"may I take your order" ,reply:"rp_10_offeredhelp"},
	{ input:"you look too fat for pizza",reply:"rp_990_insulted"},
	{ input:"I mean you really look fat",reply:"rp_990_insulted"},

	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	},{ input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"what pizza toppings have you liked in the past" ,reply:"rp_20_pizza_prefer"},
	
	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{input:"we have lots of toppings, what do you like",reply:"rp_20_pizza_prefer"},

	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"what's your favorite vegetables" ,reply:"rp_20_pizza_prefer" },

	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"do you like meats or veggies or both",reply:"rp_20_carno_prefer"},


	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"well, are you a vegetarian" ,reply:"rp_20_pizza_prefer" },

	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"do you like meat or vegetables" ,reply:"rp_20_carno_prefer" },


	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{input:"we can put any toppings on, so do you have a preference",reply:"rp_20_pizza_prefer"},


	{ input:"TEST NEWGAME ATTEMPT TO DISCOVER GLUTEN OBJECTION",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"why has it been such a long time",reply:"rp_10_past_reaction"},


	{ input:"TEST NEWGAME GETS TO decide mushroom meat TOO QUICKLY",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"I like your clothes too" ,reply:"rp_10_offeredhelp"},
	{ input:"thanks for coming in. you look cool too",reply:"rp_10_offeredhelp"},
	{ input:"so what would you like",reply:"rp_10_offeredhelp"},
	{ input:"how about cheese",reply:"rp_10_offeredhelp"},
	{ input:"how about tomato",reply:"rp_10_offeredhelp"},

	{ input:"TEST NEWGAME ATTEMPT GOOD PATH",reply:null},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"why has it been so long",reply:"rp_10_past_reaction"},
	{ input:"you look good too",reply:"rp_990_complimented"},
	{ input:"welcome to piezanos, the home of the best pizza in town",reply:"rp_10_first_time"},
	{ input:"glad to have you, how can I help you",reply:"rp_10_offeredhelp"},
	{input:"what kind of toppings do you like" ,reply:"rp_10_offeredhelp"},
	{input:"how about sausage with those mushrooms" ,reply:"rp_10_offeredhelp"},

];
