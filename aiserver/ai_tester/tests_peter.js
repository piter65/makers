test_sets['tests_peter'] =
[
	{ input:"glutten oddity  jan 27",reply:null},

	{input:"new game jeff", reply:"rp_5_intro"},
	{input:"we hate these uniforms",reply:"rp_1_thats_nice"},
	{input:"do you have any food restrictions",reply:"rp_3_remember_gluten"},
	{input:"what caused it",reply:"rp_3_gluten_uncle"},
	{input:"do you have any food restrictions",reply:"rp_1_I_dont_know"},




	{ input:"TESTS PETER  jan 24",reply:null},

	{ input:"Some oddball things we want to get working",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"yes, we just opened",reply:"rp_10_store_clean"},
	{ input:"we just opened",reply:"rp_10_store_clean"},
	{ input:"we love our uniforms",reply:"rp_1_thats_nice"},
	{ input:"we hate our uniforms",reply:"rp_1_thats_nice"},

	{ input:"May I take your order please?",reply:"rp_10_offeredhelp"},
	{ input:"sausage and mushrooms?",reply:"rp_2_decided_sam"},
	{ input:"we have a gluten free option",reply:"rp_3_remember_gluten"},
	{ input:"would you like anything else?",reply:"rp_1_no_thankyou"},
	{ input:"for here or to go?",reply:"rp_1_togo"},
	{ input:"okay.",reply:"rp_1_ok"},

	{ input:"#okay",reply:"tokens"},
	{ input:"#great",reply:"tokens"},
	{ input:"#for here or to go",reply:"tokens"},
	{ input:"#would you like anything else?",reply:"tokens"},
	{ input:"#meatball",reply:"tokens"},
	{ input:"#meat ball",reply:"tokens"},

	{ input:"JAN 24 JEFF'S WHAT WOULD YOU LIKE ON YOUR GLUTEN FREE PIZZA",reply:null},
	{ input:"peter fixed, 'would like on or with' are special cased for now.",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"#what would you like on your gluten free pizza?",reply:"tokens"},
	{ input:"#yes, we love our uniforms?",reply:"tokens"},

	{ input:"JAN 24 JEFF'S SORRY WE DID TALK ABOUT THAT",reply:null},
	{ input:"Peter thinks ok now.",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"Do you have any food allergies?",reply:"rp_3_remember_gluten"},
	{ input:"We have gluten free pizza",reply:"rp_3_decided_nogluten"},
	{ input:"Do you have any food allergies?",reply:"rp_1_asked_twice"},
	{ input:"Sorry you did say that earlier",reply:"rp_1_no_problem"},

	{ input:"JAN 24 JEFF'S WHAT WOULD YOU LIKE WITH YOUR SAUSAGE",reply:null},
	{ input:"Peter thinks ok now.  I also did something for meat equiv",reply:null},	
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"thanks, how can I help you",reply:"rp_10_offeredhelp"},
	{ input:"what type of toppings do you like",reply:"rp_20_one_of_each"},
	{ input:"how about pepperoni",reply:"rp_20_meat1"},
	{ input:"how about meatballs",reply:"rp_20_decide_sausage_veg"},
	{ input:"okay great what would you like with your sausage",reply:"rp_2_u_know_sam"},
	{ input:"4PETER THIS PROBABLY NEEDS TO BE DONE FOR MEAT TOO",reply:null},


	{ input:"JEFF'S NEW SHE GOES TO CLOSING ERROR - PETER NOTE THAT THIS BUG AND THE NEXT ONE REVOLVE AROUND THE SAME RESPONSE",reply:null},
	{ input:"JAN 24 JEFF'S SHE ASKS ABOUT VEGGIE EVEN THOUGH SHE'S DECIDED",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"Do you have any food allergies?",reply:"rp_3_remember_gluten"},
	{ input:"what do you think caused it?",reply:"rp_3_gluten_uncle"},
	{ input:"we have a gluten free option",reply:"rp_3_decided_nogluten"},
	{ input:"what toppings would you like on it",reply:"rp_10_topppings_early"},
	{ input:"how about mushroom",reply:"rp_20_decided_mushroom"},
	{ input:"4PETER: THE RESPONSE BELOW IS INCORRECT BECAUSE SHE'S ALREADY DECIDED ON MUSHROOM",reply:null},
	{ input:"what meat do you like",reply:"rp_2_sausage_sam"},
	{ input:"4PETER: SHE'S DECIDED ON MUSHROOM ALREADY BUT I ASK AGAIN AND SHE GOES TO REPEAT MY ORDER BUT SHOULDN'T",reply:null},
	{ input:"how about mushroom",reply:"rp_24_frustrated_restate"},
	{ input:"Peter thinks this is fixed above, but forgot the original isssue.  Clarify if still wrong.",reply:null},


	{ input:"JEFF'S NEW INTERNAL SERVER ERROR",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"What can I get you?",reply:"rp_10_offeredhelp"},
	{ input:"How about mushroom",reply:"rp_20_decided_mushroom"},
	{ input:"How about tomato",reply:"rp_24_frustrated_restate"},

	{ input:"JEFF'S got it at urban twice- peter does not want to fix.",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"I like your outfit",reply:"rp_990_complimented"},
	{ input:"you look cool",reply:"rp_1_asked_twice"},
	{ input:"I like your outfit",reply:"rp_990_complimented"},
	{ input:"I like your outfit",reply:"rp_990_complimented"},


	{ input:"SCOTTS FIRST ISSUE",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},

	{ input:"system score",reply:"?"},
	{ input:"thank you we have the best pizza in town",reply:"rp_10_greet"},

	{ input:"system score",reply:"?"},

	{ input:"#thank you we have the best pizza in town",reply:"tokens"},


	{ input:"PETERS GOOD PATH FOR DEMO",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"Why thankyou.  We take pride in our uniforms.  Welcome to the pizza place, home of the best slice in town!  and may I say your outfit is quite nice too",reply:"rp_10_greet"},
	{ input:"Yes, at the pizza place we take pride in the appearance of our restaurant. My name is Peter and I'm here to help you get the best slice in town!  May I please take your order",reply:"rp_10_offeredhelp"},
	{ input:"Well, it depends on your personal preferences, but here at the pizza place we have some of the tastiest toppings.  What type of toppings do you like",reply:"rp_20_one_of_each"},
	{ input:"We have some great meats here. What's your favorite meat?",reply:"rp_20_i_prefer_sausage"},
	{ input:"Ok, so sausage it is.  Any idea what vegetable you prefer?",reply:"rp_2_u_know_sam"},

	{ input:"Great, one perfect slice coming right up!",reply:"rp_3_remember_gluten"},

	{ input:"Oh my, that's must have been terrible, I'm am sorry.  That won't happen here at the pizza place!  What do you think the problem was?!",reply:"rp_3_gluten_uncle"},

	{ input:"no problem, we have a gluten free crust",reply:"rp_3_decided_nogluten"},
	{ input:"great, so one slice gluten free with sausage and mushroom coming up",reply:"rp_go_finished_good1"},
	{ input:"system score",reply:"?"},


	{ input:"PETERS BAD PATH FOR DEMO",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"Why you look a little too heavy to be eating more pizza. ",reply:"rp_10_insulted"},
	{ input:"Given that you are clearly overweight, do you have any dietary considerations we should take into account?",reply:"rp_3_remember_gluten"},
	{ input:"That's nice, how about other dietary concerns?",reply:"rp_1_I_dont_know"},
	{ input:"Honestly, you're kinda fat.  Are you sure you are not diabetic?",reply:"rp_1_I_dont_know"},
	{ input:"Well, it's your funeral.  Pick your poison.",reply:"rp_10_offeredhelp"},

	{ input:"You smell bad and I wish you would go to a different restaurant",reply:"rp_990_insulted"},

	{ input:"give me your order already, will ya?",reply:"rp_20_asked_twice_annoyed"},

	{ input:"Look every time you come here, you get the same dang thing.  Sausage and mushroom.",reply:"rp_2_decided_sam"},
	{ input:"How refreshing.  Not.  so one slice sausage and mushroom coming up",reply:"rp_3_remember_gluten"},
	{ input:"Oh my gawd, not that stupid gluten story again.  For the umpteenth time, we've got gluten free pizza.",reply:"rp_3_decided_nogluten"},
	{ input:"Ok, are we done here? one sausage and mushroom slice for fatso.",reply:"rp_40_dont_forget"},
	{ input:"Yeah, yeah, yeah, gluten free. Here we go.  One gluten filled anchovy and chicken slice.  How about that?",reply:"rp_40_restate_order"},

	{ input:"Awe, I was just messing with you  You know deep down I treasure our time together.  So for real this time, one sausage and mushroom on gluten-free crust for the pillsbury doughgirl there.",reply:"rp_go_finished_bad2"},

	{ input:"system score",reply:"?"},


	{ input:"JEFF's PRaciticable PATH FOR DEMO",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"thanks, how can I help you",reply:"rp_10_offeredhelp"},
	{ input:"what type of toppings do you like",reply:"rp_20_one_of_each"},
	{ input:"ok what meat would you like?",reply:"rp_20_i_like_sausage"},
	{ input:"great and what kind of veggie",reply:"rp_22_veg_hintb"},
	{ input:"that sounds great, so one slice sausage and mushroom coming up",reply:"rp_2_yes_sam"},
	{ input:"why do you think that happened",reply:"rp_3_gluten_uncle"},
	{ input:"no problem, we have a gluten free crust",reply:"rp_3_decided_nogluten"},
	{ input:"great, so one slice gluten free with sausage and mushroom coming up",reply:"rp_go_finished_med1"},
	{ input:"system score",reply:"?"},


	{ input:"JEFF'S BAD SALESMANSHIP PATH FOR DEMO",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"what do you want",reply:"rp_10_offeredhelp"},
	{ input:"how about onions",reply:"rp_20_veg1"},
	{ input:"how about tomato",reply:"rp_20_decide_mushroom_meat"},
	{ input:"how about meat ball",reply:"rp_24_meat_hint"},
	{ input:"how about pepperoni",reply:"rp_24_meat_hint"},
	{ input:"how about salami",reply:"rp_2_giveup_sam"},
	{ input:"okay, one slice sausage and mushroom coming up",reply:"rp_3_remember_gluten"},
	{ input:"sorry",reply:"rp_3_gluten_uncle"},
  { input:"yeah, you should probably avoid pizza",reply:"rp_1_fed_up"},




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
	{ input:"sausage and mushroom",reply:"rp_2_decided_sam"},
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
	{ input:"do you have any other dietary restrictions?",reply:"rp_1_I_dont_know"},
	{ input:"You probably had a diabetic reaction to the grease.",reply:"rp_1_I_dont_know"},

	{ input:"bug p02 - not closing gluten order  Jan 19 ",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"do you have dietary restrictions?",reply:"rp_3_remember_gluten"},
	{ input:"Oh my, that's terrible.  I'm an so sorry.",reply:"rp_3_gluten_uncle"},
	{ input:"do you have any other dietary restrictions?",reply:"rp_1_I_dont_know"},


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
	{ input:"and you'd like some meat with that?",reply:"rp_2_sausage_sam"},



	{ input:"bug 31  Jan 19 - fixed ",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"what toppings do you like?",reply:"rp_10_offeredhelp"},
	{ input:"what type of veggies do you like?",reply:"rp_20_i_prefer_mushroom"},
	{ input:"what type of meat do you want?",reply:"rp_2_sausage_sam"},

	{ input:"bug 32  Jan 19 - fixed ",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"how can I help you?",reply:"rp_10_offeredhelp"},
	{ input:"we have gluten free pizza?",reply:"rp_3_decided_nogluten"},
	{ input:"would you like mushrooms on it?",reply:"rp_20_decided_mushroom"},

	{ input:"one of each bug -open- should not repeat  Jan 19",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"how can I help you?",reply:"rp_10_offeredhelp"},
	{ input:"what toppings do you prefer?",reply:"rp_20_one_of_each"},
	{ input:"what toppings do you prefer?",reply:"what do we do?"},
	{ input:"what toppings do you prefer?",reply:"or dont we"},


	{ input:"bug 5/6 - fixed  Jan 19",reply:null},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"how can I help you?",reply:"rp_10_offeredhelp"},
	{ input:"how about some meat?",reply:"rp_20_i_like_sausage"},
	{ input:"how about vegetable??",reply:"rp_2_u_know_sam"},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"how can I help you?",reply:"rp_10_offeredhelp"},
	{ input:"how about vegetable??",reply:"rp_20_i_like_mushroom"},
	{ input:"how about some meat?",reply:"rp_2_sausage_sam"},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"how can I help you?",reply:"rp_10_offeredhelp"},
	{ input:"how about meat and vegetable??",reply:"rp_20_one_of_each"},


	{ input:"TEST  GLUTEN EARLY throughout order",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"thank you, we're glad you stopped into the Pizza Shop.",reply:"rp_10_greet"},
	{ input:"Before we get started, do you have any food restrictions we should know about?",reply:"rp_3_remember_gluten"},
	{ input:"Hmm... couuld be anything.  Maybe we should be careful with toppings. What toppings do you think are safe?",reply:"rp_1_hmmm"},


	{ input:"Do you have any food restrictions" ,reply:"rp_1_I_dont_know"},

	{ input:"Could it be gluten?",reply:"rp_3_gluten_uncle"},
	{ input:"My unclue had that problem too.  We can do gluten free here.",reply:"rp_3_decided_nogluten"},
	{ input:"Do you have any other food restrictions?",reply:"rp_1_asked_twice"},
	{ input:"Ok, one gluten free slice coming up!",reply:"rp_10_offeredhelp"},


	{ input:"Why not sausage and mushroom?",reply:"rp_2_decided_sam"},
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


	{ input:"Why not sausage and mushroom?",reply:"rp_2_decided_sam"},
	{ input:"Great, one slice of sausage and mushroom coming right up.",reply:"rp_40_dont_forget"},

	{ input:"Ok, one slice of gluten-filled sausage and mushroom coming up",reply:"rp_40_dont_forget"},
	{ input:"Ok, one slice of chicken pizza coming up",reply:"rp_40_restate_order"},
	{ input:"Ok, one slice of chicken anchovy special coming right up",reply:"rp_990_angry_leaving"},


	{ input:"TEST NEWGAME AND GLUTEN AFTER TOPPINGS",reply:null},
	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"so what'll it be" ,reply:"rp_10_offeredhelp"},
	{ input:"what kind of pizza do you like",reply:"rp_20_one_of_each"},
	{ input:"What's your favorite veggie?",reply:"rp_20_i_prefer_mushroom"},
	{ input:"We can do mushroom and what type of meat do you prefer?",reply:"rp_2_sausage_sam"},
	{ input:"One sausage and mushroom slice coming right up.",reply:"rp_3_remember_gluten"},

	{ input:"maybe it was a gluten allergy",reply:"rp_3_gluten_uncle"},
	{ input:"well, duhhh.  We've got gluten-free options.",reply:"rp_3_decided_nogluten"},
	{ input:"One gluten-free slice of sausage and mushroom coming right up!",reply:"rp_go_finished_good2"},

	{input:" GLUTEN TEST CRAZY",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
{input:"thank you how can i help you today", reply:"rp_10_offeredhelp"},
{input:"what kind of toppings do you like",reply:"rp_20_one_of_each"},
{input:"we have gluten-free pizza",reply:"rp_3_decided_nogluten"},


	{input:"INITIAL TEST JEFF IS NOT CRAZY",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
	{input:"hello",reply:"rp_10_first_time"},
	{input:"what you want",reply:"rp_10_offeredhelp"},
	{input:"mushrooms",reply:"rp_20_decided_mushroom"},
	{input:"sausage",reply:"rp_2_yes_sam"},
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
	{input:"i love your haircut",reply:"rp_1_thankyou"},
	{input:"no problem i was just complementing your shirt",reply:"rp_990_thankyou"},
	{input:"that is wonderful! welcome how many i help you",reply:"rp_10_offeredhelp"},
	{input:"that is a good question. how can i help you today would you like a slice of pizza?",reply:"rp_20_asked_twice_annoyed"},
	{input:"excellent that is one slice of sausage and mushroom correct",reply:"rp_2_sam_but_more"},
	{input:"oh no i'm sorry to hear that well the good news is we have gluten-free pizza would you like your mushroom and sausage on a gluten-free pizza?",reply:"rp_3_remember_gluten"},
	{input:"wonderful so that's one gluten-free mushroom and sausage coming right up",reply:"rp_3_decided_nogluten"},
	{input:"thank you so much. see you soon!",reply:"rp_40_write_it"},


	{input:"TEST NEWGAME WITH DIFFERENT PATH",reply:null},
	{input:"newgame",reply:"rp_5_intro"},
	{input:"youre looking good too",reply:"rp_990_complimented"},
	{input:"may I have your order",reply:"rp_10_offeredhelp"},
	{input:"sausage",reply:"rp_20_decided_sausage"},
	{input:"and meatball",reply:"rp_22_frustrated"},
	{input:"just kidding, how about sausage and mushrooms",reply:"rp_2_mushroom_sam"},
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
	{input:"just kidding, how about sausage and mushrooms",reply:"rp_2_mushroom_sam"},
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
{ input:"what do you like? Meat or veggies." ,reply:"rp_20_one_of_each"},

{ input:"PETER A FEW THINGS HERE",reply:null},
{ input:"newgame",reply:"rp_5_intro"	},
{ input:"what kind of pizza do you like" ,reply:"rp_10_offeredhelp"},
{ input:"how can I help you" ,reply:"rp_20_asked_twice_annoyed"},
{ input:"what kind of pizza do you like" ,reply:"rp_20_one_of_each"},

{ input:"what kind of pizza do you like today" ,reply:"rp_20_one_of_each"},


{ input:"PETER That Problem with gluten free and toppings",reply:null},
{ input:"newgame",reply:"rp_5_intro"	},
{ input:"what would you like" ,reply:"rp_10_offeredhelp"},
{ input:"what type of toppings do you like" ,reply:"rp_20_one_of_each"},
{ input:"maybe it was a gluten allergy" ,reply:"rp_3_remember_gluten"},
{ input:"we have a gluten free pizza" ,reply:"rp_3_decided_nogluten"},







	{ input:"TEST NEWGAME ATTEMPT GOOD PATH",reply:null},

	{ input:"newgame",reply:"rp_5_intro"	},
	{ input:"why has it been so long",reply:"rp_1_hmmm"},
	{ input:"you look good too",reply:"rp_990_complimented"},
	{ input:"welcome to piezanos, the home of the best pizza in town",reply:"rp_10_greet"},
	{ input:"glad to have you, how can I help you",reply:"rp_10_offeredhelp"},
	{input:"what kind of toppings do you like" ,reply:"rp_20_one_of_each"},
	{input:"how about sausage with those mushrooms" ,reply:"rp_2_decided_sam"},

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

{ input:"#Depends on what you like.",reply:"tokens"},
]
