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

	let anim_strings = [];
	let index_anim = 0;
	for (; index_anim < data.animations.length; ++index_anim)
	{
		let anim = data.animations[index_anim];
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

	const reply = util.format
	(
		"%s:%s%s"
		,code
		,data.text
		,anim_strings.join('')
	);

	return reply;
};