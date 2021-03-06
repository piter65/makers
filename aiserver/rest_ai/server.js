const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const _ = require('underscore');
const uuid_by_timestamp = require('uuid/v1')
const strReplaceAll = require('str-replace-all')
const decoder = require('./decoder');


const state_templates = require('./state_templates');
const logger = require('./logger');
const nlu = require('./nlu');
const act_10 = require('./act_10');
const act_20 = require('./act_20');
const act_22 = require('./act_22');
const act_24 = require('./act_24');

const act_30 = require('./act_30');
const act_32 = require('./act_32');
const act_40 = require('./act_40');

const act_970 = require('./act_970');
const act_980 = require('./act_980');
const act_990 = require('./act_990');

const f = require('./func');

let testArr = ['alice', 'bob', 'cisco', 'dude'];


// This function will work so long as 'obj' 
//   does not contain any cyclic references.
function deepClone(obj)
{
	return JSON.parse(JSON.stringify(obj));
}


// peter stole this from stack overflow
function getTimeStamp() {
    var now = new Date();
    return ((now.getMonth() + 1) + '/' +
            (now.getDate()) + '/' +
             now.getFullYear() + " " +
             now.getHours() + ':' +
             ((now.getMinutes() < 10)
                 ? ("0" + now.getMinutes())
                 : (now.getMinutes())) + ':' +
             ((now.getSeconds() < 10)
                 ? ("0" + now.getSeconds())
                 : (now.getSeconds())));
}



// Start server with empty object of sessions.
var sessions = {};

var is_dev = false;
var port = 80;
if (is_dev)
	port = 3000;

logger.log_clear();
logger.log("did clear ");

var extratext="This is extra!";



const subs_1 = JSON.parse(fs.readFileSync('subs_1.json'));
const subs_2 = JSON.parse(fs.readFileSync('subs_2.json'));
const subs_3 = JSON.parse(fs.readFileSync('subs_3.json'));
const subs_4 = JSON.parse(fs.readFileSync('subs_4.json'));


const app = express();

app.get('/', function(req, res)
{
	// Logger is unmuted by default unless specifically requested.
	logger.mute = req.query.mute == "true";

	res.sendFile(path.join(__dirname + '/index.html'));

	logger.log("sending index pa ");
});

// Creates a new session and sends back the session ID.
app.get('/ai/start-session', function(req, res)
{
	// Logger is unmuted by default unless specifically requested.
	logger.mute = req.query.mute == "true";

	logger.log("Get request for '/ai/start-session' received:");

	logger.log("query: " + JSON.stringify(req.query));

	// Create a new session ID based on timestamp.
	//   We shouldn't have conflicts because node 
	//   is single threaded by default.
	const id_session = uuid_by_timestamp();
	var state = {};

	// Save the new session's blank state by the session ID.
	sessions[id_session] = state;

	logger.log("Session generated. ID: %s", id_session);

	// Send back the session ID to the client.
	res.set('Access-Control-Allow-Origin', '*');
	res.send(id_session);
});


function calcBigScore()
{

// approved methodology 2/10a   - 
		state.session.score_overall = 
			(state.session.score_exec*100)+
			(state.session.score_listen*250)+	
			(state.session.score_discovery*350)+
			(state.session.score_empathy*150)+
			(state.session.score_overcome*100)+
			(state.session.score_language*50);

}



app.get('/ai', function(req, res)
{



	// Logger is unmuted by default unless specifically requested.
	logger.mute = req.query.mute == "true";


	logger.log("Get request for '/ai' received:")

	logger.log("query: " + JSON.stringify(req.query));

	const id_session = req.query.id_session;


	if(!id_session)
	{
		logger.log("\tQuery 'id_session' not set");
		logger.log("\tRequest aborted");

		var result = 
		{
			success: false,
		};
		result.error = "Query 'id_session' not set. Request aborted.";

		res.send(result);
		return;
	}

	const state_prev = sessions[id_session];
	if(!state_prev)
	{
		logger.log("\tSession does not exist with the ID: $s", id_session);
		logger.log("\tRequest aborted");

		var result = 
		{
			success: false,
		};
		result.error = "Session does not exist with the ID: " + id_session
		result.error += ". \nMake a request to /ai/start-session to generate a new session ID.";

		res.send(result);
		return;
	}

	const state = deepClone(state_prev);

	// Store the previous state for reference.
	state.prev = deepClone(state_prev);
	state.prev.prev = null;

	// If the session data is unset, initialize 
	//   it with the default session data.
	if (!state.session)
	{
		logger.log("--------------------- DEEP CLONING NEW CONNECTION ---------------------");

		state.session = deepClone(state_templates.session_defaults);
	}

	logger.log("&&&&&&&&&FIRST DISPLAY&&&&&&&&&&&&& testall:"+state.session.testall+"  testcount"+state.session.testcount+"\n");



	state.session.num_entries++;	// keep count of entries...
	logger.log("_______________ num_entries:"+state.session.num_entries+"\n");

	// Reset the state's result data.
	state.result = deepClone(state_templates.result_defaults);
	logger.log("************************ testall:"+state.session.testall+"  testcount"+state.session.testcount+"\n");



	logger.log("\tResult - Start: \n" + JSON.stringify(state.result, null, 4));

	state.result.text_origin = req.query.text.toLowerCase();
	state.result.text = ' ' + state.result.text_origin + ' ';

	if(!state.result.text)
	{
		logger.log("\tQuery 'text' not set");
		logger.log("\tRequest aborted");

		state.result.error = "Query 'text' not set. Request aborted.";

		res.send(state.result);
		return;
	}

// peter wants a extra text, used for feedback now.
	state.result.extra =":";







//	logger.log("_story_Player: '%s'", state.result.text_origin);
// 	{input:"INITIAL TEST",reply:null}, 
	logger.log('_story_{input:"%s",',state.result.text_origin);

	sub_pass(state, subs_1);
	logger.log("\tSub Pass 1 'text': '%s'", state.result.text);
	state.result.text_1 = state.result.text;

	sub_pass(state, subs_2);
	logger.log("\tSub Pass 2 'text': '%s'", state.result.text);
	state.result.text_2 = state.result.text;


	sub_pass(state, subs_3);
	logger.log("\tSub Pass 3 'text': '%s'", state.result.text);
	state.result.text_3 = state.result.text;

	sub_pass(state, subs_4);
	logger.log("\tSub Pass 4 'text': '%s'", state.result.text);
	// state.result.text_4 = state.result.text;
	
	// Extract intent and entities.
	nlu.process(state);

	let save_state = false;
	switch (state.result.text_origin)
	{
		// case 'system test':
		case 'system check':
			state.result.code = 'rp_0_check';
			state.result.reply = state.result.code+':system is functional';
			break;
		case 'system state':
		case 'system last':
			state.result.code = 'rp_0_state';
			state.result.reply = state.result.code+':ACT:'+state.session.act+'\n';
			state.result.reply += JSON.stringify(state_prev, null, 4);
			break;


		case 'system score':
// refigure....			

// approved methodology 2/10a   - 
		state.session.score_overall = 
			(state.session.score_exec*100)+
			(state.session.score_listen*250)+	
			(state.session.score_discovery*350)+
			(state.session.score_empathy*150)+
			(state.session.score_overcome*100)+
			(state.session.score_language*50);

			state.result.code = 'rp_0_score';

			state.result.reply = 'score #'+state.session.score_overall+'\n:';
			state.result.reply += state.result.code+';\nCommunication Style:'+state.session.score_exec+'\n';
			state.result.reply += 'Active Listening:'+state.session.score_listen+'\n';
			state.result.reply += 'Understanding:'+state.session.score_discovery+'\n';
			state.result.reply += 'Empathy:'+state.session.score_empathy+'\n';

			break;

		case 'system_vscore':
		case 'system vscore':
// approved methodology 2/10a   - 
		state.session.score_overall = 
			(state.session.score_exec*100)+
			(state.session.score_listen*250)+	
			(state.session.score_discovery*350)+
			(state.session.score_empathy*150)+
			(state.session.score_overcome*100)+
			(state.session.score_language*50);

			state.result.code = 'rp_0_score';
			state.result.reply = "score:"+state.session.score_overall;

			break;

		case 'system_gametime':
			state.result.code = 'rp_0_gametime';
			state.result.reply = "240";
			break;


		case 'system version':
			state.result.code = 'rp_0_version';

			state.result.reply += state.result.code+'\nversion Feb 12\n';

			break;


		case 'ibjeff':
			state.result.code = 'rp_0_ibjeff';
			state.result.reply = state.result.code+':ACT:'+state.session.act+'\n';
			state.result.reply += '"'+state_prev.result.text_1+'"\n';
			state.result.reply += '"'+state_prev.result.text_2+'"\n';
			state.result.reply += state_prev.result.tokens[0]+'\n';
			state.result.reply += state_prev.result.tokens[1]+'\n';
			state.result.reply += state_prev.result.tokens[2]+'\n';
			state.result.reply += state_prev.result.tokens[3]+'\n';
			break;

		case 'howdy':
			state.result.code = 'rp_0_howdy';
			state.result.reply = state.result.code+':Hey there cowboy';
			break;

		 case 'system test all':
		 case 'sta':		// for peter's lazy typing

		 	state.result.code = 'rp_0_system_test_all';
		 	state.session.testall=1;				// let the testing begin!
		 	state.session.testcount=0;				// let the testing begin!

		 	save_state = true;			// we need to actually save data.
		 	break;

		case 'system test next':
		case 'system next test':

			let codes = Object.keys(decoder.code_data);

			if (state.session.testcount < codes.length)
			{
				state.result.code = codes[state.session.testcount];
				state.result.reply = decoder.decode_reply(state.result.code);

				++state.session.testcount;
				save_state = true;			// we need to actually save data.
			}
			else
			{
				state.result.code = 'rp_0_system_test_no_more_codes';
				state.result.reply = '---No more codes. Code count: '+state.session.testcount+'---';
			}

			break;

		case 'system stop test':
		case 'system test stop':
			state.result.code = 'rp_0_system_test_stop';
			state.result.reply = '---testing stopped: '+state.session.testcount+'---';
			state.session.testall=0;				// so sad, testing over.
			state.session.testcount=0;			// just to be tidy.
			save_state = true;			// we need to actually save data.

			break;


		default:
			process_ai(state);
			save_state = true;
			break;
	}

	state.result.success = true;

//	state.result.reply+=state.result.extra;	// pa

	if (state.session.testall != 0)				// let the testing begin!
	{
		state.result.code = 'rp_0_ib_testing';
		state.result.reply = 'This is test#'+state.session.testcount+'\n';	

		let codes = Object.keys(decoder.code_data);

		if (state.session.testcount < codes.length)
		{
				state.result.code = codes[state.session.testcount];
				state.result.reply = decoder.decode_reply(state.result.code);

				++state.session.testcount;
				save_state = true;			// we need to actually save data.

// make sure we keep trying till we get valid data...
				while (state.result.reply[0] != 'r')
				{
					state.result.code = codes[state.session.testcount];
					state.result.reply = decoder.decode_reply(state.result.code);

					++state.session.testcount;
				}





		}
		else
		{
				state.result.code = 'rp_0_system_test_no_more_codes';
				state.result.reply = 'No more codes. Code count: '+state.session.testcount+'---';
		}


		state.session.testcount++;				// let the testing begin!
		logger.log("................testall:"+state.session.testall+
			"  testcount"+state.session.testcount+"\n");




	}

    if (state.result.tokens.includes('e_newgame'))
    {
		// Reset the session.
		state.session = deepClone(state_templates.session_defaults);
		save_state = true;
		logger.log("_story_:date:"+getTimeStamp());

		state.result.code = "rp_5_intro";
		state.result.reply = decoder.decode_reply(state.result.code);

		if (state.result.tokens.includes('e_robot'))
		{
			logger.log("Robots Rule");
		}
    }

	// Save a current state if we're flagged to do so.
	if (save_state)
		sessions[id_session] = state;

	logger.log("\tResult: \n" + JSON.stringify(state.result, null, 4));
//	logger.log("_story_AI:'"+state.result.reply+"'");

// 	{input:"INITIAL TEST",reply:null}, 
	logger.log('_story_reply:"'+state.result.reply+'"},\n');

// Brent if you want to clean this up and loopify, have a it.
// I don't want to deal with dowhile loops in JS.
	if (state.result.text_origin.charAt(0)=='#')
	{
		state.result.reply = state.result.tokens[0]+" ";
		if (state.result.tokens[1])
			state.result.reply+= state.result.tokens[1]+" ";
		if (state.result.tokens[2])
			state.result.reply+= state.result.tokens[2]+" ";
		if (state.result.tokens[3])
			state.result.reply+= state.result.tokens[3]+" ";

	}

	res.set('Access-Control-Allow-Origin', '*');
	res.send(state.result);

//	state.session.testall+=1000;    // why not?

	logger.log("##Last####Display################# testall:"+state.session.testall+
			"  testcount"+state.session.testcount+"\n");

});

// app.get('/crash', function(req, res)
// {
// 	logger.log('\nIntentially crashing...\n');

// 	// throw Error('The server has been intentionally crashed.');
// 	throw 'The server has been intentionally crashed.';

// 	res.send();
// });

// Start the server
var server = app.listen(port, function()
{
	logger.log('Server live');
	logger.log('Listening on port %d', server.address().port);
});

// Catch any uncaught exceptions, log it, and then let the crash happen.
process.on('uncaughtException', function(err)
{
	logger.log('\n-----\nCRASH: %s\n-----\n', err);
});


function sub_pass(state, subs)
{
	for (var key in subs)
	{
		var value = subs[key];
		state.result.text = state.result.text.replace(key, value);
		state.result.text = strReplaceAll(key, value, state.result.text);
	}
}

// function parse_pass_2(state)
// {
// 	for (var key in intents)
// 	{
// 		var value = intents[key];
// 		state.result.text = state.result.text.replace(key, value);
// 	}
// }

function process_ai(state)
{

	act_980.process(state);		// do commmon scoring...


	logger.log('gonna process:'+state.session.act);
	switch (state.session.act)
	{
		case 10:
			act_10.process(state);
			break;
		case 20:
			act_20.process(state);
			break;
		case 22:
			act_22.process(state);
			break;
		case 24:
			act_24.process(state);
			break;

		case 30:
			act_30.process(state);
			break;
		case 32:
			act_32.process(state);
			break;
		case 40:
			act_40.process(state);
			break;

		default:
			state.result.error = 'Act Out of Range';
			break;
	}
	// Decode the reply.
// Wait, let's do the gluten saga...
	act_970.process(state);		// do commmon scoring...

	if (state.result.code==null)	
	{
// do 990 only if no other answer.  		
			act_990.process(state);	
	}	

// set triggers - this is so flags set once outside of logic
	if (state.session.one_meat_one_veggie_trig>0)
		{  state.session.one_meat_one_veggie_ctx = 1; state.session.one_meat_one_veggie_trig =0;}	
	else state.session.one_meat_one_veggie_ctx = 0;

	if (state.session.why_sick_trig>0)
		{  state.session.why_sick_ctx = 1; state.session.why_sick_trig =0;}	
	else state.session.why_sick_ctx = 0;

	if (state.session.oops_trig>0)
		{  state.session.oops_ctx = 1; state.session.oops_trig--;}	
	else state.session.oops_ctx = 0;

	if (state.session.order_trig>0)
		{  state.session.order_ctx = 1; state.session.order_trig--;}	
	else state.session.oops_order = 0;


	logger.log('state.result.code: "%s"', state.result.code);

	state.result.reply = decoder.decode_reply(state.result.code);


// approved methodology 2/10a   - 
		state.session.score_overall = 
			(state.session.score_exec*100)+
			(state.session.score_listen*250)+	
			(state.session.score_discovery*350)+
			(state.session.score_empathy*150)+
			(state.session.score_overcome*100)+
			(state.session.score_language*50);



// ---------------------------------- Peter hacking in last pass
//
//    "b_idle b_idle_slouch b_look b_look_slouch b_engage b_bored b_tap b_phone b_angry"
//    "b_idle b_look b_engage b_bored b_tap b_phone b_angry"
//    "f_neutr f_smile f_frown f_conf f_angry f_sad"

/*

if (state.session.score_overall <4700)
 {	// not very happy
	 if (state.result.reply!=null)
 		{
// make the face a lot unhappy
 		state.result.reply = state.result.reply.replace("f_neutr","f_angry");   // test one
		state.result.reply = state.result.reply.replace("f_smile","f_sad");   // test one
// make the body slouch
 		state.result.reply = state.result.reply.replace("b_idle","b_idle_slouch");   // test one
		state.result.reply = state.result.reply.replace("f_look","f_look_slouch");   // test one
		}
 }


 if (state.session.score_overall <4500)
 {	// not very happy
	 if (state.result.reply!=null)
 		{
// make the face a little unhappy
 		state.result.reply = state.result.reply.replace("f_neutr","f_angry");   // test one
		state.result.reply = state.result.reply.replace("f_smile","f_neutr");   // test one
		}
 }

 if (state.session.score_overall >23)
 {	// a little happy
	 if (state.result.reply!=null)
 		{
// make the face a little unhappy
 		state.result.reply = state.result.reply.replace("f_neutr","f_smile");   // smiles everyone
		state.result.reply = state.result.reply.replace("f_angry","f_neutr");   // and never angry
		}
 }

*/

	if (state.session.game_over)
	{
			state.result.reply += '\nGAME OVER-\n';
			state.result.reply += 'Executive Presence:'+state.session.score_exec+' ';
			state.result.reply += 'Active Listening:'+state.session.score_listen+' ';
			state.result.reply += 'Understanding:'+state.session.score_discovery+' ';
			state.result.reply += 'Empathy:'+state.session.score_empathy+' ';
			state.result.reply += 'Overall:'+(state.session.score_overall*100)+' ';

			state.result.reply += '\n try "newgame myname" to play again\n';		
	}

}

// end of file