var logger = require('./logger');
var randomInt = require('random-int');
const f = require('./func');

// So Peter has been rethinking the out of sequence act, 
// I think it's better to have it progress from stage to stage.

// So, the gluten_sagas = 

// stage=0 = unknown
// stage=1 = oh my, something is not right here.
// stage=2 = It is a gluten problem!
// stage=5 = solved, gluten free pizza has been offerred.


exports.process = function(state)
{
	logger.log('ACT 970 - start pa');

////////////////////////////////////////////////////////////////////////////////
	if ( (state.session.act >9) && (state.session.act<30))  // from intro ordering...
	{{

		if ( state.session.gluten_saga<2)
		{
		if (f.hasAny(state.result.tokens, 'e_sick','e_gluten',"i_dietary"))
			{
				// fix - make this an rp1 in future releases...
				state.result.code = 'rp_3_remember_gluten';		// last time I got sick..
				state.session.score_understand++;
				state.session.gluten_saga=2;		// move it up
				state.session.empathy_opportunity=true;   // looking for sorry
				state.session.why_sick_trig=1;  // she says she was sick
			}
		}

		else if (state.session.gluten_saga==2) 
		{
			if (f.hasAny(state.result.tokens, 'e_gluten'))	// look for gluten only
				{
				state.result.code = 'rp_3_gluten_uncle';		// last time I got sick..
				state.session.score_understand++;
				state.session.gluten_saga=3;		// move it up
				state.session.empathy_opportunity=true;   // looking for sorry
				}

			else if (f.hasAny(state.result.tokens, 'i_dietary', 'e_sick'))	// look for gluten only
				{
				state.result.code = 'rp_1_hmmm';		// last time I got sick..
				}
		}
		else if (state.session.gluten_saga>4) 
		{
			if  (
					(f.hasAny(state.result.tokens, 'i_dietary'))	// any dietary talk
							&&
					!state.result.tokens.includes( 'i_close')	)		
				{
				state.result.code = 'rp_1_asked_twice';		// last time I got sick..
				state.session.score_listen--;
				}

		}

	}}

	if (state.session.act == 10)	// only do the why's in act 10.	
	{{
		if ( state.session.gluten_saga<5)
		{
			if (f.hasAll(state.result.tokens, 'e_nogluten'))
			{
				state.result.code = 'rp_3_decided_nogluten'; // state"A no gluten option?Lets do that! "
				state.session.gluten_saga=5;		// move it up
				state.session.score_exec++;
			}
		}
	}}


	if ( (state.session.act >19) && (state.session.act<30))  // from intro ordering...
	{{
		if ( state.session.gluten_saga<5)
		{
			if (   state.result.tokens.includes('e_nogluten')
				 		&&
			 	!state.result.tokens.includes( 'i_close')	)
			{
				state.result.code = 'rp_3_decided_nogluten'; // state"A no gluten option?Lets do that! "
				state.session.gluten_saga=5;		// move it up
				state.session.score_exec++;
			}
		}
	}}




// only omnipresent actions here
	if ( true)  // from intro ordering...
	{{
		{
			if (f.hasAny(state.result.tokens, 'i_isyou','e_simplebad'))
				state.result.code = 'rp_1_no';		// nope
				
			else if (f.hasAny(state.result.tokens, 'i_isyou','e_simplegood'))
				state.result.code = 'rp_1_yes';		// yep		
		}
	}}


////////////////////////////////////////////////////////////////////////////////////////////////

	logger.log('ACT 970 - processed');

};