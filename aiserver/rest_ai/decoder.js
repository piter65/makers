const logger = require('./logger');
const fs = require('fs');
const util = require('util');

exports.code_data = JSON.parse(fs.readFileSync('decodes.json'));

exports.decode_reply = function(code)
{
	let self = this;

	if (!code)
		throw Error("Code never set. Ensure that if you match a token, that 'state.result.code' is set to something.");

	const data = self.code_data[code];
	if (!data)
		throw Error("Code not recognized: '" + code + "'. Unable to decode.");

	var anim_strings = [];
	if (data.animations != null)	// peter was here.  poking around where he don't belong..
	for (let index_anim = 0; index_anim < data.animations.length; ++index_anim)
	{
		let anim = data.animations[index_anim];
		anim_strings.push(util.format
		(
			":%s:%s:%d:%d"
			,anim.face
			,anim.body
			,anim.delay
			,anim.duration
		));
	}

	const reply = util.format
	(
		"%s:%s%s"
		,code
		,data.text
		,anim_strings.join('')
	);

	return reply;
};