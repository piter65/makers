const logger = require('./logger');
const fs = require('fs');
const util = require('util');

exports.code_data = JSON.parse(fs.readFileSync('decodes.json'));

exports.decode_reply = function(code)
{
	let self = this;
	var animstr = "placeholder"

	if (!code)
		throw Error("Code never set. Ensure that if you match a token, that 'state.result.code' is set to something.");

	// Escape comments
	if (   code.includes('comment')
		|| code.includes('---'))
		return '---comment---';

	const data = self.code_data[code];
	if (!data)
		throw Error("Code not recognized: '" + code + "'. Unable to decode.");


if (data.animations)

{{

	let anim_strings = [];
	let index_anim = 0;
	for (; index_anim < data.animations.length; ++index_anim)
	{
		let anim = data.animations[index_anim];
		if (!anim.delay) anim.delay=0;  // pa - pad non-entries
		if (!anim.duration) anim.duration=0;  // pa - pad non-entries

		anim_strings.push(util.format
		(
			":%s:%d:%s:%d"
			,anim.face
			,anim.delay
			,anim.body
			,anim.duration
		));
	}

	// Loop thru and fill in NULL animations as needed.
	for (; index_anim < 3; ++index_anim)
	{
		let anim = data.animations[index_anim];
		anim_strings.push(":none:0:none:0");
	}
	animstr=anim_strings.join('');

}}


// These are stock animation over-rides...

 //   ,"--- vincent_body":"b_idle b_look b_engage b_bored b_tap b_phone b_angry"
  //  ,"--- vincent_face":"f_neutr f_smile f_frown f_conf f_angry f_sad"

// ,"--- stock anims":"happy sad upset angry conf bored norm"

if (data.stock=='happy')
		animstr=":f_smile:0:b_engage:0:none:0:none:0:none:0:none:0";
if (data.stock=='sad')
		animstr=":f_sad:0:b_idle:0:none:0:none:0:none:0:none:0";
if (data.stock=='upset')
		animstr=":f_frown:0:b_tap:0:none:0:none:0:none:0:none:0";
if (data.stock=='angry')
		animstr=":f_angry:0:b_angry:0:none:0:none:0:none:0:none:0";
if (data.stock=='conf')
		animstr=":f_conf:0:b_bored:0:none:0:none:0:none:0:none:0";
if (data.stock=='bored')
		animstr=":f_neutr:0:b_phone:0:none:0:none:0:none:0:none:0";
if (data.stock=='norm')
		animstr=":f_neutr:0:b_idle:0:none:0:none:0:none:0:none:0";
// --- new ones
if (data.stock=='gross')
		animstr=":f_frown:0:b_look:0:none:0:none:0:none:0:none:0";
if (data.stock=='h_look')
		animstr=":f_smile:0:b_look:0:none:0:none:0:none:0:none:0";
if (data.stock=='u_look')
		animstr=":f_frown:0:b_look:0:none:0:none:0:none:0:none:0";
if (data.stock=='boredf')
		animstr=":f_frown:0:b_bored:0:none:0:none:0:none:0:none:0";
if (data.stock=='talksm')
		animstr=":f_smile:0:b_talk:0:none:0:none:0:none:0:none:0";
if (data.stock=='confen')
		animstr=":f_conf:0:b_engage:0:none:0:none:0:none:0:none:0";

	const reply = util.format
	(
		"%s:%s%s"
		,code
		,data.text
		,animstr+":timeout:240:"
	);

	return reply;
};