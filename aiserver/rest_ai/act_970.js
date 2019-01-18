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


	if (state.session.act == 10)	// only do the why's in act 10.	
	{{

			if (f.hasAll(state.result.tokens, 'i_why','e_longtime'))
				{
				if (state.session.gluten_saga==0)
					{
					state.result.code = 'rp_10_past_reaction';  // why so long?
					state.session.gluten_saga=1;		// move it up
					state.session.score_understand+=2;
					state.session.empathy_opportunity=true;   // looking for sorry
					state.session.why_sick_ctx=1;  // she says she wants one meat, one veggie.
					}		
				else
					{
					state.result.code = 'rp_1_asked_twice';  // didn't we discuss this already?
					state.session.score_understand--;
				 	}
				 }

	}}
////////////////////////////////////////////////////////////////////////////////
	else if ( (state.session.act >19) && (state.session.act<30))  // when ordering...
	{{
		if (f.hasAll(state.result.tokens, 'i_why','e_longtime'))
				{
				state.result.code = 'rp_1_can_we_continue';  // nonseq
				state.session.score_understand--;
			 	}
	}}


////////////////////////////////////////////////////////////////////////////////
	if ( (state.session.act >9) && (state.session.act<30))  // from intro ordering...
	{{

		if (state.session.why_sick_ctx>0)  // she said she was sick
		{{
			if (f.hasAll(state.result.tokens, 'i_why'))
				{
				state.result.code = 'rp_3_gluten_uncle';
				state.session.score_understand++;
				state.session.score_listen++;	
			 	}
		state.session.why_sick_ctx=0; // kill the opportunity for now		
		}}


		if ( state.session.gluten_saga<2)
		{
		if (f.hasAny(state.result.tokens, 'e_sick','e_gluten',"i_dietary"))
			{
				// fix - make this an rp1 in future releases...
				state.result.code = 'rp_3_remember_gluten';		// last time I got sick..
				state.session.score_understand++;
				state.session.gluten_saga=2;		// move it up
				state.session.empathy_opportunity=true;   // looking for sorry
				state.session.why_sick_ctx=1;  // she says she was sick
			}
		}

		else if ( state.session.gluten_saga<3)
		{
			if (f.hasAny(state.result.tokens, 'e_sick','e_gluten','i_dietary'))
				{
				state.result.code = 'rp_3_gluten_uncle';		// last time I got sick..
				state.session.score_understand++;
				state.session.gluten_saga=3;		// move it up
				state.session.empathy_opportunity=true;   // looking for sorry
				}
		}

		{
			if (f.hasAny(state.result.tokens, 'i_isyou','e_vegan'))
				{
				state.result.code = 'rp_1_no';		// last time I got sick..
				state.session.score_understand++;
				state.session.gluten_saga=3;		// move it up
				state.session.empathy_opportunity=true;   // looking for sorry
				}
			else if (f.hasAny(state.result.tokens, 'i_isyou','e_simplegood'))
				{
				state.result.code = 'rp_1_yes';		// last time I got sick..
				state.session.score_understand++;
				state.session.gluten_saga=3;		// move it up
				state.session.empathy_opportunity=true;   // looking for sorry
				}



		}



	}}
	if ( (state.session.act >19) && (state.session.act<30))  // from intro ordering...
	{{
		if ( state.session.gluten_saga<5)
		{

			if (   state.result.tokens.includes('i_nogluten')
				 		&&
			 	!state.result.tokens.includes( 'i_close')	)
			{
				state.result.code = 'rp_3_decided_nogluten'; // state"A no gluten option?Lets do that! "
				state.session.gluten_saga=5;		// move it up
				state.session.score_exec++;
			}
		}	
	}}
// No action for act30, or act40..

////////////////////////////////////////////////////////////////////////////////////////////////

	logger.log('ACT 970 - processed');

};