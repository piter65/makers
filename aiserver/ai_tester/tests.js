var tests_origin =
[
	{
		 input:"INITIAL TEST"
		,reply:null
	},
	{
		 input:"newgame"
		,reply:"rp_5_intro"
	},
	{
		 input:"hello"
		,reply:"rp_10_first_time"
	},
	{
		 input:"what you want"
		,reply:"rp_10_offeredhelp"
	},
	{
		 input:"mushrooms"
		,reply:"rp_20_decided_mushrooms"
	},
	{
		 input:"sausage"
		,reply:"rp_24_correct"
	},

	{
		 input:"sausage"
		,reply:"rp_30_remember_gluten"
	},
	{
		 input:"gluten free option"
		,reply:"rp_32_decided_nogluten"
	},
	{
		 input:"alright"
		,reply:"rp_40_restate_order"
	},
	{
		 input:"one slice sausage mushrooms no gluten"
		,reply:"rp_40_finished"
	},


	{
		 input:"TEST NEWGAME WITH ABOVE TEST"
		,reply:null
	},
	{
		 input:"newgame"
		,reply:"rp_5_intro"
	},
	{
		 input:"youre looking good too"
		,reply:"rp_10_first_time"
	},
	{
		 input:"may I have your order"
		,reply:"rp_10_offeredhelp"
	},
	{
		 input:"sausage"
		,reply:"rp_20_decided_sausage"
	},
	{
		 input:"and meatball"
		,reply:"rp_22_frustrated"
	},

	{
		 input:"just kidding, how about sausage and mushrooms"
		,reply:"rp_22_correct"
	},
	

	{
		 input:"ok"
		,reply:"rp_30_remember_gluten"
	},
	{
		 input:"gluten free option"
		,reply:"rp_32_decided_nogluten"
	},
	{
		 input:"alright"
		,reply:"rp_40_restate_order"
	},
	{
		 input:"one slice sausage mushrooms with extra gluten"
		,reply:"rp_40_finished"
	},
	{
		 input:"one slice sausage mushrooms without gluten"
		,reply:"rp_40_finished"
	},



	{ input:"TEST NEWGAME WITH NEW STUFF",reply:null},

	{ input:"newgame",reply:"rp_5_intro"	},

	{
		 input:"hey there fatso.  Want some pizza"
		,reply:"rp_10_offeredhelp"
	},
	{
		 input:"mushrooms"
		,reply:"rp_20_decided_mushrooms"
	},
	{
		 input:"ok"
		,reply:"rp_30_remember_gluten"
	},
	{
		 input:"gluten free option"
		,reply:"rp_32_decided_nogluten"
	},
	{
		 input:"alright"
		,reply:"rp_40_restate_order"
	},
	{
		 input:"one slice sausage mushrooms no gluten"
		,reply:"rp_40_finished"
	},




];