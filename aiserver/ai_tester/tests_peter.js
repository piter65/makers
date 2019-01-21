test_sets['tests_peter'] =
[

	{ input:"bug 43  Jan 19 - response hints at order",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"order please",reply:"rp_10_offeredhelp"},
	{ input:"what toppings would you like on it",reply:"rp_20_one_of_each"},
	{ input:"ok what kind of meat do you prefer?",reply:"rp_20_i_prefer_sausage"},
	{ input:"ok great and what kind of veggie",reply:"rp_22_veg_hintb"},
	{ input:"ok great and what kind of veggie",reply:"rp_22_veg_hintb"},
	{ input:"ok great and what kind of veggie",reply:"rp_22_veg_hintb"},

	{ input:"bug 43 - test bed 2.,  Jan 19 - response hints at order",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"order please",reply:"rp_10_offeredhelp"},
	{ input:"what toppings would you like on it",reply:"rp_20_one_of_each"},
	{ input:"ok what kind of meat do you prefer?",reply:"rp_20_i_prefer_sausage"},
	{ input:"ok great and what kind of veggie",reply:"rp_22_veg_hintb"},
	{ input:"ok great and what kind of veggie",reply:"rp_22_veg_hintb"},
	{ input:"tomato",reply:"rp_22_veg_hintb"},


	{ input:"bug 41  Jan 19 - response hints at order",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"order please",reply:"rp_10_offeredhelp"},
	{ input:"sausage and mushroom",reply:"rp_20_decided_sam"},
	{ input:"ok, I'll write that up.",reply:"rp_3_remember_gluten"},
	{ input:"sorry to hear that.",reply:"rp_3_gluten_uncle"},
	{ input:"we have gluten free options.",reply:"rp_3_decided_nogluten"},
	{ input:"great, would you like a drink?",reply:"rp_40_no_drink"},
	{ input:"ok one sausage and one mushroom coming up",reply:"rp_40_dont_forget"},
	{ input:"ok one sausage, mushroom on gluten-free crust",reply:"rp_go_finished_med1"},

	{ input:"bug p03 - more gluten gymnastics  Jan 19 ",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"do you have dietary restrictions?",reply:"rp_3_remember_gluten"},
	{ input:"Could be gluten.  We offer gluten free options.",reply:"rp_3_decided_nogluten"},
	{ input:"do you have dietary restrictions?",reply:"rp_1_asked_twice"},
	{ input:"you look like you might be diabetic?",reply:"rp_1_asked_twice"},
	{ input:"you look like you need food restrictions?",reply:"rp_1_asked_twice"},
	{ input:"are you possibly low on sugar?",reply:"rp_1_asked_twice"},
	{ input:"do you suffer from hypertension?",reply:"rp_1_asked_twice"},
	{ input:"I got it, you got a gluten allergy!",reply:"rp_1_asked_twice"},
	{ input:"One gluten-free slice coming up!",reply:"rp_1_asked_twice"},



	{ input:"bug p01 - not closing gluten order  Jan 19 ",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"do you have dietary restrictions?",reply:"rp_3_remember_gluten"},
	{ input:"do you have any other dietary restrictions?",reply:"rp_1_hmmm"},
	{ input:"You probably had a diabetic reaction to the grease.",reply:"rp_1_hmmm"},

	{ input:"bug p02 - not closing gluten order  Jan 19 ",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"do you have dietary restrictions?",reply:"rp_3_remember_gluten"},
	{ input:"Oh my, that's terrible.  I'm an so sorry.",reply:"rp_3_gluten_uncle"},
	{ input:"do you have any other dietary restrictions?",reply:"rp_30_pizza_bad_idea"},


	{ input:"bug 20  Jan 19 - fixed - response hints at order",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"you look cool?",reply:"rp_990_complimented"},
	{ input:"I like urban?",reply:"rp_10_first_time"},
	{ input:"you look cool?",reply:"rp_990_complimented"},
	{ input:"youre a snappy dresser.",reply:"rp_990_complimented_too_much"},


	{ input:"bug 25  Jan 19 - fixed",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"what toppings would you like?",reply:"rp_10_offeredhelp"},
	{ input:"what kind of veggies do you like?",reply:"rp_20_i_prefer_mushroom"},
	{ input:"and you'd like some meat with that?",reply:"rp_20_i_prefer_sausage"},



	{ input:"bug 31  Jan 19 - fixed ",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"what toppings do you like?",reply:"rp_10_offeredhelp"},
	{ input:"what type of veggies do you like?",reply:"rp_20_i_prefer_mushroom"},
	{ input:"what type of meat do you want?",reply:"rp_20_i_prefer_sausage"},

	{ input:"bug 32  Jan 19 - fixed ",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"how can I help you?",reply:"rp_10_offeredhelp"},
	{ input:"we have gluten free pizza?",reply:"rp_3_decided_nogluten"},
	{ input:"would you like mushrooms on it?",reply:"rp_20_decided_mushroom"},

	{ input:"one of each bug -open- should not repeat  Jan 19",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"how can I help you?",reply:"rp_10_offeredhelp"},
	{ input:"what toppings do you prefer?",reply:"rp_20_i_like_sausage"},
	{ input:"what toppings do you prefer?",reply:"rp_20_i_prefer_mushroom"},
	{ input:"what toppings do you prefer?",reply:"rp_20_i_prefer_mushroom"},


	{ input:"bug 5/6 - fixed  Jan 19",reply:null},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"how can I help you?",reply:"rp_10_offeredhelp"},
	{ input:"how about some meat?",reply:"rp_20_i_like_sausage"},
	{ input:"how about vegetable??",reply:"rp_20_i_prefer_mushroom"},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"how can I help you?",reply:"rp_10_offeredhelp"},
	{ input:"how about vegetable??",reply:"rp_20_i_like_mushroom"},
	{ input:"how about some meat?",reply:"rp_20_i_prefer_sausage"},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"how can I help you?",reply:"rp_10_offeredhelp"},
	{ input:"how about meat and vegetable??",reply:"rp_20_one_of_each"},


	{ input:"TEST  GLUTEN EARLY throughout order",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"thank you, we're glad you stopped into the Pizza Shop.",reply:"rp_10_greet"},
	{ input:"Before we get started, do you have any food restrictions we should know about?",reply:"rp_3_remember_gluten"},
	{ input:"Hmm... couuld be anything.  Maybe we should be careful with toppings. What toppings do you think are safe?",reply:"rp_1_thank_you"},


	{ input:"Do you have any food restrictions" ,reply:"rp_3_remember_gluten"},
	{ input:"I'm sorry to hear that.",reply:"rp_1_thank_you"},
	{ input:"Could it be gluten?",reply:"rp_3_gluten_uncle"},
	{ input:"My unclue had that problem too.  We can do gluten free here.",reply:"rp_3_decided_nogluten"},
	{ input:"Do you have any other food restrictions?",reply:"rp_1_asked_twice"},
	{ input:"Ok, one gluten free slice coming up!",reply:"rp_10_offeredhelp"},


	{ input:"Why not sausage and mushroom?",reply:"rp_20_decided_sam"},
	{ input:"Great, one slice of sausage and mushroom coming right up.",reply:"rp_40_dont_forget"},

	{ input:"Ok, one slice of gluten-filled sausage and mushroom coming up",reply:"rp_40_dont_forget"},
	{ input:"Ok, one slice of chicken pizza coming up",reply:"rp_40_restate_order"},
	{ input:"Ok, one slice of chicken anchovy special coming right up",reply:"rp_990_angry_leaving"},

	{ input:"TEST NEWGAME AND GLUTEN EARLY IN WELCOME",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"Do you have any food restrictions" ,reply:"rp_3_remember_gluten"},
	{ input:"I'm sorry to hear that.",reply:"rp_1_thank_you"},
	{ input:"Could it be gluten?",reply:"rp_3_gluten_uncle"},
	{ input:"My unclue had that problem too.  We can do gluten free here.",reply:"rp_3_decided_nogluten"},
	{ input:"Do you have any other food restrictions?",reply:"rp_1_asked_twice"},
	{ input:"Ok, one gluten free slice coming up!",reply:"rp_10_offeredhelp"},


	{ input:"Why not sausage and mushroom?",reply:"rp_20_decided_sam"},
	{ input:"Great, one slice of sausage and mushroom coming right up.",reply:"rp_40_dont_forget"},

	{ input:"Ok, one slice of gluten-filled sausage and mushroom coming up",reply:"rp_40_dont_forget"},
	{ input:"Ok, one slice of chicken pizza coming up",reply:"rp_40_restate_order"},
	{ input:"Ok, one slice of chicken anchovy special coming right up",reply:"rp_990_angry_leaving"},


	{ input:"TEST NEWGAME AND GLUTEN AFTER TOPPINGS",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"so what'll it be" ,reply:"rp_10_offeredhelp"},
	{ input:"what kind of pizza do you like",reply:"rp_20_one_of_each"},
	{ input:"What's your favorite veggie?",reply:"rp_20_i_like_mushroom"},
	{ input:"We can do mushroom and what type of meat do you prefer?",reply:"rp_20_i_prefer_sausage"},
	{ input:"One sausage and mushroom slice coming right up.",reply:"rp_3_remember_gluten"},

	{ input:"maybe it was a gluten allergy",reply:"rp_3_gluten_uncle"},
	{ input:"well, duhhh.  We've got gluten-free options.",reply:"rp_3_decided_nogluten"},
	{ input:"One gluten-free slice of sausage and mushroom coming right up!",reply:"rp_40_finished_good1"},

	{input:" GLUTEN TEST CRAZY",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
{input:"thank you how can i help you today", reply:"rp_10_offeredhelp"},
{input:"what kind of toppings do you like",reply:"rp_20_one_of_each"},
{input:"we have gluten-free pizza",reply:"rp_3_decided_nogluten"},


	{input:"INITIAL TEST JEFF IS NOT CRAZY",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
	{input:"hello",reply:"rp_10_first_time"},
	{input:"what you want",reply:"rp_10_offeredhelp"},
	{input:"mushrooms",reply:"rp_20_decided_mushrooms"},
	{input:"sausage",reply:"rp_24_correct"},
	{input:"sausage",reply:"rp_3_remember_gluten"},
	{input:"gluten free option",reply:"rp_3_decided_nogluten"},
	{input:"alright",reply:"rp_40_write_it"},
	{input:"one slice sausage mushrooms no gluten",reply:"rp_40_finished_good1"},

	{input:"STEFANIE PATH!",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
	{input:"new games stefanie",reply:"rp_5_intro"},
	{input:"welcome to pay zone is the best place in town how may help you today?",reply:"rp_10_offeredhelp"},

	{input:"STEFANIE PATH2!",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
	{input:"i love your haircut",reply:"rp_990_thankyou"},
	{input:"no problem i was just complementing your shirt",reply:"rp_990_thankyou"},
	{input:"that is wonderful! welcome how many i help you",reply:"rp_10_offeredhelp"},
	{input:"that is a good question. how can i help you today would you like a slice of pizza?",reply:"rp_20_asked_twice_annoyed"},
	{input:"excellent that is one slice of sausage and mushroom correct",reply:"rp_20_sam_but_more"},
	{input:"oh no i'm sorry to hear that well the good news is we have gluten-free pizza would you like your mushroom and sausage on a gluten-free pizza?",reply:"rp_3_remember_gluten"},
	{input:"wonderful so that's one gluten-free mushroom and sausage coming right up",reply:"rp_3_decided_nogluten"},
	{input:"thank you so much. see you soon!",reply:"rp_40_write_it"},


	{input:"TEST NEWGAME WITH DIFFERENT PATH",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
	{input:"youre looking good too",reply:"rp_990_complimented"},
	{input:"may I have your order",reply:"rp_10_offeredhelp"},
	{input:"sausage",reply:"rp_20_decided_sausage"},
	{input:"and meatball",reply:"rp_22_frustrated"},
	{input:"just kidding, how about sausage and mushrooms",reply:"rp_22_correct_nice"},
	{input:"ok",reply:"rp_3_remember_gluten"},
	{input:"We have a no gluten option",reply:"rp_3_decided_nogluten"},
	{input:"Let's write that up!",reply:"rp_40_write_it"},
	{input:"one slice sausage mushrooms with extra gluten",reply:"rp_40_dont_forget"},
	{input:"one slice sausage mushrooms without gluten",reply:"rp_40_finished_good1"},

	{input:"TEST NEWGAME WITH DIFFERENT PATH",reply:null},
	{input:"newgame robot",reply:"rp_5_intro"},
	{input:"Thank you, and welcome to PieZanos, may I take your order?",reply:"rp_10_offeredhelp"},
	{input:"Why not try our chicken and cheese special?",reply:"rp_20_considering_topping"},
	{input:"Just chicken then??",reply:"rp_20_considering_bird"},
	{input:"How about hawaiin?",reply:"rp_20_considering_hawaiin"},
	{input:"Maybe you craving dog crap pizza?",reply:"rp_20_considering_silly"},
	{input:"sausage",reply:"rp_20_decided_sausage"},
	{input:"and meatball",reply:"rp_22_frustrated"},
	{input:"just kidding, how about sausage and mushrooms",reply:"rp_22_correct_nice"},
	{input:"ok",reply:"rp_3_remember_gluten"},
	{input:"I'm sorry to hear that, but it's your lucky day,We have a no gluten option",reply:"rp_3_decided_nogluten"},
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
	{input:"I think you are stinky.",reply:"rp_990_insulted_too_much"},
	{input:"I think you smell bad.",reply:"rp_990_insulted_too_much"},

	{ input:"TEST NEWGAME WITH NICE STUFF",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},

	{ input:"you look nice too",reply:"rp_990_complimented" },
	{ input:"you look cool too",reply:"rp_990_complimented"},
	{ input:"i like your outfit",reply:"rp_990_complimented_too_much"},

	{ input:"may I take your order",reply:"rp_10_offeredhelp"},
	{ input:"how about a hawaiin",reply:"rp_20_considering_hawaiin"},

	{ input:"TEST NEWGAME WITH KNOWN BROKEN SHOULD BE FIXED",reply:null},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"may I take your order" ,reply:"rp_10_offeredhelp"},
	{ input:"you look too fat for pizza",reply:"rp_990_insulted"},
	{ input:"I mean you really look fat",reply:"rp_990_insulted_too_much"},

	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	},{ input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"what pizza toppings have you liked in the past" ,reply:"rp_20_one_of_each"},

	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{input:"we have lots of toppings, what do you like",reply:"rp_20_one_of_each"},

	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"what's your favorite vegetables" ,reply:"rp_20_i_like_mushroom" },

	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"do you like meats or veggies or both",reply:"rp_20_one_of_each"},


	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"well, are you a vegetarian" ,reply:"rp_1_no" },

	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"do you like meat or vegetables" ,reply:"rp_20_one_of_each" },


	{ input:"TEST NEWGAME WAYS TO ASK WHAT SHE LIKES",reply:null},
 	{ input:"newgame",reply:"rp_5_intro"	}, { input:"c1",reply:"rp_10_offeredhelp"  },
	{ input:"we can put any toppings on, so do you have a preference",reply:"rp_20_considering_topping"},

	{ input:"TEST NEWGAME NOT SURE WHAT TOO QUICKLY",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"I like your clothes too" ,reply:"rp_990_complimented"},
	{ input:"thanks for coming in. you look cool too",reply:"rp_990_complimented"},
	{ input:"so what would you like",reply:"rp_10_offeredhelp"},
	{ input:"how about cheese",reply:"rp_10_offeredhelp"},
	{ input:"how about tomato",reply:"rp_10_offeredhelp"},



{ input:"TEST NEWGAME ON STUFF FROM JEFFS",reply:null},
{ input:"newgame",reply:"rp_5_intro"	},
{ input:"your clothes are nice too" ,reply:"rp_990_complimented"},
{ input:"you look marvelous" ,reply:"rp_990_complimented"},

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
{ input:"we have a gluten free pizza" ,reply:"rp_3_decided_nogluten"},







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

{ input:"What vegetables do you like",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"We have lots of options to choose from",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},
{ input:"We have lots of vegetables to choose from",reply:"rp_5_intro"},
	{ input:"newgame",reply:"rp_5_intro"	},



{ input:"TOKENS, TOKENS, TOKENS, TOKENS FOR EVERYONE",reply:null},	
{ input:"newgame robot",reply:"rp_5_intro"},

{ input:"#I feel sorry for you",reply:"tokens"},
{ input:"#I'm hearing that from a lot of customers",reply:"tokens"},
{ input:"#would you like a gluten free slice",reply:"tokens"},
{ input:"#You won't have that problem here",reply:"tokens"},
{ input:"#Yes we have other customers with gluten issues",reply:"tokens"},
{ input:"#What a drag",reply:"tokens"},
{ input:"#I feel sorry for you",reply:"tokens"},
{ input:"#That doesn't sound like fun",reply:"tokens"},
{ input:"#That must have been terrible",reply:"tokens"},
{ input:"#What a bummer",reply:"tokens"},
{ input:"#Yes of course",reply:"tokens"},
{ input:"#That's terrible",reply:"tokens"},
{ input:"#I'm sorry to hear that",reply:"tokens"},
{ input:"#What are you in the mood for?",reply:"tokens"},
{ input:"#Do you see anything on the menu that you like?",reply:"tokens"},
{ input:"#Sorry to hear that",reply:"tokens"},
{ input:"#I'd be happy to ",reply:"tokens"},
{ input:"#What kind of vegetables do you prefer",reply:"tokens"},
{ input:"#Do you see anything on the menu that you like?",reply:"tokens"},
{ input:"#Did you have anything in mind?",reply:"tokens"},
{ input:"#What do you have in mind",reply:"tokens"},
{ input:"#Are you a vegetarian",reply:"tokens"},
{ input:"#Do you eat meat",reply:"tokens"},
{ input:"#Well we have the best pizza around",reply:"tokens"},
{ input:"#Well we have the best pizza in town",reply:"tokens"},
{ input:"#glutenfree ",reply:"tokens"},
{ input:"#gluten-free",reply:"tokens"},
{ input:"#arizona pizza",reply:"tokens"},
{ input:"#do you have any food allergies",reply:"tokens"},
{ input:"#any other restrictions",reply:"tokens"},
{ input:"#are you ok with flour",reply:"tokens"},
{ input:"#the pizza shop",reply:"tokens"},
{ input:"#how about some meat",reply:"tokens"},
{ input:"#how about some veggie",reply:"tokens"},
{ input:"#why not try some veggetables",reply:"tokens"},
{ input:"#what type of toppings",reply:"tokens"},
{ input:"#You probably had a diabetic reaction to the grease.",reply:"tokens"},


]
