const logger = require('./logger');
const fs = require('fs');
const util = require('util');
const randomInt = require('random-int');

exports.code_data = JSON.parse(fs.readFileSync('decodes.json'));

exports.decode_reply = function(code)
{
	let self = this;

	const data = self.code_data[code];
	if (!data)
		throw Error("Code not recognized: '" + code + "'. Unable to decode.");

	var anim_strings = [];
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
		"%s\n%s%s"
		,code
		,data.text
		,anim_strings.join('')
	);

	return reply;
};