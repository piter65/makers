var tests_origin =
[
	{input:"INITIAL TEST JEFF IS NOT CRAZY",reply:null},
	{input:"hello",reply:"rp_10_first_time"},
	{input:"what you want",reply:"rp_10_offeredhelp"},
	{input:"mushrooms",reply:"rp_20_decided_mushrooms"},
	{input:"sausage",reply:"rp_24_correct"},
	{input:"sausage",reply:"rp_30_remember_gluten"},
	{input:"gluten free option",reply:"rp_32_decided_nogluten"},
	{input:"alright",reply:"rp_40_write_it"},
	{input:"one slice sausage mushrooms no gluten",reply:"rp_40_finished"},

	{input:"STEFANIE PATH!",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
	{input:"new games stefanie",reply:"rp_5_intro"},
	{input:"welcome to pay zone is the best place in town how may help you today?",reply:"rp_10_offeredhelp"},

	{input:"STEFANIE PATH2!",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
	{input:"i love your haircut",reply:"rp_990_thankyou"},
	{input:"no problem i was just complementing your shirt",reply:"rp_990_thankyou"},
	{input:"that is wonderful! welcome how many i help you",reply:"rp_10_offeredhelp"},
	{input:"that is a good question. how can i help you today would you like a slice of pizza?",reply:"rp_20_asked_twice"},
	{input:"excellent that is one slice of sausage and mushroom correct",reply:"rp_20_decided_both"},
	{input:"oh no i'm sorry to hear that well the good news is we have gluten-free pizza would you like your mushroom and sausage on a gluten-free pizza?",reply:"rp_30_remember_gluten"},
	{input:"wonderful so that's one gluten-free mushroom and sausage coming right up",reply:"rp_32_decided_nogluten"},
	{input:"thank you so much. see you soon!",reply:"rp_40_write_it"},


	{input:"TEST NEWGAME WITH DIFFERENT PATH",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
	{input:"youre looking good too",reply:"rp_990_complimented"},
	{input:"may I have your order",reply:"rp_10_offeredhelp"},
	{input:"sausage",reply:"rp_20_decided_sausage"},
	{input:"and meatball",reply:"rp_22_frustrated"},
	{input:"just kidding, how about sausage and mushrooms",reply:"rp_22_correct"},
	{input:"ok",reply:"rp_30_remember_gluten"},
	{input:"We have a no gluten option",reply:"rp_32_decided_nogluten"},
	{input:"Let's write that up!",reply:"rp_40_write_it"},
	{input:"one slice sausage mushrooms with extra gluten",reply:"rp_40_dont_forget"},
	{input:"one slice sausage mushrooms without gluten",reply:"rp_40_finished"},

	{input:"TEST NEWGAME WITH DIFFERENT PATH",reply:null},
	{input:"newgame robot",reply:"rp_5_intro"},
	{input:"Thank you, and welcome to PieZanos, may I take your order?",reply:"rp_10_offeredhelp"},
	{input:"Why not try our chicken and cheese special?",reply:"rp_20_considering_topping"},
	{input:"Just chicken then??",reply:"rp_20_considering_bird"},
	{input:"How about hawaiin?",reply:"rp_20_considering_hawaiin"},
	{input:"Maybe you craving dog crap pizza?",reply:"rp_20_considering_crap"},
	{input:"sausage",reply:"rp_20_decided_sausage"},
	{input:"and meatball",reply:"rp_22_frustrated"},
	{input:"just kidding, how about sausage and mushrooms",reply:"rp_22_correct"},
	{input:"ok",reply:"rp_30_remember_gluten"},
	{input:"I'm sorry to hear that, but it's your lucky day,We have a no gluten option",reply:"rp_32_decided_nogluten"},
	{input:"Let's write that up!",reply:"rp_40_write_it"},
	{input:"one slice sausage onion with extra gluten",reply:"rp_40_restate_order"},
	{input:"Ok,ok, im adding gluten free.",reply:"rp_40_restate_order"},
	{input:"Are you messing with me?",reply:"rp_40_restate_order"},
    {input:"one dog crap slice coming right up!",reply:"rp_40_restate_order"},



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
{ input:"maybe it was a gluten allergy",reply:"rp_10_past_reaction"},

	{ input:"TEST NEWGAME GETS TO decide mushroom meat TOO QUICKLY",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"I like your clothes too" ,reply:"rp_10_offeredhelp"},
	{ input:"thanks for coming in. you look cool too",reply:"rp_10_offeredhelp"},
	{ input:"so what would you like",reply:"rp_10_offeredhelp"},
	{ input:"how about cheese",reply:"rp_10_offeredhelp"},
	{ input:"how about tomato",reply:"rp_10_offeredhelp"},

	{ input:"TEST NEWGAME ON THE WHAT KIND OF PIZZA DO YOU LIKE PATH",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"so what'll it be" ,reply:"rp_10_offeredhelp"},
	{ input:"what kind of pizza do you like",reply:"rp_20_prefer_or_want"},
	{ input:"what type of pizza have you liked in the past",reply:"rp_20_pizza_prefer"},
	{ input:"maybe it was a gluten allergy",reply:"rp_10_offeredhelp"},
{ input:"maybe you are allergic to gluten",reply:"rp_10_offeredhelp"},


{ input:"TEST NEWGAME ON STUFF FROM JEFFS",reply:null},
{ input:"newgame",reply:"rp_5_intro"	},
{ input:"your clothes are nice too" ,reply:"rp_10_offeredhelp"},
{ input:"you look marvelous" ,reply:"rp_10_offeredhelp"},

{ input:"PETER THIS SHOULD GO TO MEAT CHOICE",reply:null},
{ input:"newgame",reply:"rp_5_intro"	},
{ input:"what would you like." ,reply:"rp_10_offeredhelp"},
{ input:"what do you like? Meat or veggies." ,reply:"rp_10_offeredhelp"},

{ input:"PETER A FEW THINGS HERE",reply:null},
{ input:"newgame",reply:"rp_5_intro"	},
{ input:"what kind of pizza do you like" ,reply:"rp_10_offeredhelp"},
{ input:"how can I help you" ,reply:"rp_10_offeredhelp"},
{ input:"what kind of pizza do you like" ,reply:"rp_20_prefer_or_want"},
{ input:"today" ,reply:"rp_20_pizza_prefer"},
{ input:"what kind of pizza do you like today" ,reply:"rp_20_pizza_prefer"},


{ input:"PETER That Problem with gluten free and toppings",reply:null},
{ input:"newgame",reply:"rp_5_intro"	},
{ input:"what would you like" ,reply:"rp_10_offeredhelp"},
{ input:"what type of toppings do you like" ,reply:"rp_20_pizza_prefer"},
{ input:"maybe it was a gluten allergy" ,reply:"rp_20_gluten_disclose"},
{ input:"we have a gluten free pizza" ,reply:"rp_32_decided_nogluten"},







	{ input:"TEST NEWGAME ATTEMPT GOOD PATH",reply:null},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"why has it been so long",reply:"rp_10_past_reaction"},
	{ input:"you look good too",reply:"rp_990_complimented"},
	{ input:"welcome to piezanos, the home of the best pizza in town",reply:"rp_10_first_time"},
	{ input:"glad to have you, how can I help you",reply:"rp_10_offeredhelp"},
	{input:"what kind of toppings do you like" ,reply:"rp_10_offeredhelp"},
	{input:"how about sausage with those mushrooms" ,reply:"rp_10_offeredhelp"},

	{ input:"TEST NEWGAME BROKEN STUFF",reply:null},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"xyzzy",reply:"rp_10_past_reaction"},
	{ input:"Wacca Wacca",reply:"rp_990_complimented"},
	{ input:"You think the eagles might makes the playoffs?",reply:"rp_10_first_time"},


	{ input:"TEST Scott oddball STUFF",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},

{ input:"Glad you stopped in",reply:"rp_5_intro"},
{ input:"Great! We're glad you stopped in",reply:"rp_5_intro"},
{ input:"Glad you stopped in",reply:"rp_5_intro"},
{ input:"We're glad you stopped in",reply:"rp_5_intro"},
{ input:"Glad I'm stopped in",reply:"rp_5_intro"},
{ input:"Great! I'm glad you stopped in",reply:"rp_5_intro"},
{ input:"I'm glad you stopped in",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},

{ input:"what can I get you",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"how can I help you",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"how can I help you today",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"what can I help you with",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Well we have the best pizza around",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Well we have the best pizza in town",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"You've come to the right place",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},

{ input:"What kind of drink do you want",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Are you sure you don't want a drink?",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Do you have any dietary restrictions",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Do you have any food allergies",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Do you prefer vegetables or meat",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Do you prefer vegetables or meat or both",reply:"rp_5_intro"},
{ input:"What kind of toppings do you like",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"What kind of toppings do you prefer",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Are you a vegetarian",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Do you eat meat",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"What do you have in mind",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Did you have anything in mind?",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Do you have anything in mind?",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Do you see anything on the menu that you like?",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"What are you in the mood for?",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},

{ input:"What vegetables do you like",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"What kind of vegetables do you prefer",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"What are you in the mood for?",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"We have lots of options to choose from",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"We have lots of vegetables to choose from",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},

	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"I'd be happy to ",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"Sorry to hear that",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"I'm sorry to hear that",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"That's terrible",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},

{ input:"You won't have that problem here",reply:"rp_5_intro"},

{ input:"newgame",reply:"rp_5_intro"	},

{ input:"TOKENS, TOKENS, TOKENS, TOKENS FOR EVERYONE",reply:null},	
{ input:"newgame robot",reply:"rp_5_intro"},
{ input:"#I feel sorry for you",reply:"tokens"},
{ input:"#I'm hearing that from a lot of customers",reply:"tokens"},
{ input:"#would you like a gluten free slice",reply:"tokens"},
{ input:"#You won't have that problem here",reply:"tokens"},
{ input:"#Yes we have other customers with gluten issues",reply:"tokens"},
{ input:"#What a drag",reply:"tokens"},
{ input:"#I feel sorry for you",reply:"tokens"}
{ input:"#That doesn't sound like fun",reply:"tokens"},
{ input:"#That must have been terrible",reply:"tokens"},
{ input:"#What a bummer",reply:"tokens"},
{ input:"#Yes of course",reply:"tokens"},



]
