var logger = require('./logger');
var randomInt = require('random-int');


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
			if (state.result.tokens.includes( 'i_why')
			 && state.result.tokens.includes( 'e_longtime')
			 )
				{
				if (state.session.gluten_saga==0)
					{
					state.result.code = 'rp_10_past_reaction';  // why so long?
					state.session.gluten_saga=1;		// move it up
					state.session.score_understand+=2;
					state.session.empathy_opportunity=true;   // looking for sorry
					}		
				else
					{
					state.result.code = 'rp_1_asked_twice';  // didn't we discuss this already?
					state.session.score_understand--;
				 	}
				 }
			if (   state.result.tokens.includes('e_sick')
				|| state.result.tokens.includes('e_gluten')
				|| state.result.tokens.includes('i_dietary')
				)
				{
					state.result.code = 'rp_10_rude';  // why so long?
					state.session.score_understand--;
					state.session.act = 20;  // move on!
				}

	}}
////////////////////////////////////////////////////////////////////////////////
	else if ( (state.session.act >19) && (state.session.act<30))  // when ordering...
	{{
		if (state.result.tokens.includes( 'i_why')
		&& state.result.tokens.includes( 'e_longtime'))
				{
				state.result.code = 'rp_1_can_we_continue';  // nonseq
				state.session.score_understand--;
			 	}

		if ( 	state.session.gluten_saga<2)
		{

			if (   state.result.tokens.includes('e_sick')
				|| state.result.tokens.includes('e_gluten')
				|| state.result.tokens.includes('i_dietary')
				)
			{
				// fix - make this an rp1 in future releases...
				state.result.code = 'rp_20_gluten_disclose';  // ok- ask here.
				state.session.score_understand++;
				state.session.gluten_saga=2;		// move it up
				state.session.empathy_opportunity=true;   // looking for sorry
			}
		}

		if ( state.session.gluten_saga<5)
		{

			if (   state.result.tokens.includes('i_nogluten')
				 		&&
			 	!state.result.tokens.includes( 'i_close')
			)
			{
				// fix - make this an rp1 in future releases...
				state.result.code = 'rp_32_decided_nogluten'; // state"A no gluten option?Lets do that! "
				state.session.gluten_saga=5;		// move it up
				state.session.score_exec++;
			}
		}	
	}}
// No action for act30, or act40..

////////////////////////////////////////////////////////////////////////////////////////////////

	logger.log('ACT 970 - processed');

};