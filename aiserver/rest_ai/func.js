
// NOTE: All params after the first are arguments.
exports.includesAny = function(obj)
{
	// console.log('arguments: %s', JSON.stringify(arguments, null, 4));

	if (typeof obj.includes !== 'function')
		throw Error(`Cannot perform 'includesAny()' on object without 'includes()' function.`);

	for (let index_arg = 0; index_arg < arguments.length; ++index_arg)
	{
		let arg = arguments[index_arg];
		if (obj.includes(arg))
			return true;
	}

	return false;
};

// NOTE: All params after the first are arguments.
exports.includesAll = function(obj)
{
	// console.log('arguments: %s', JSON.stringify(arguments, null, 4));

	if (typeof obj.includes !== 'function')
		throw Error(`Cannot perform 'includesAll()' on object without 'includes()' function.`);

	for (let index_arg = 1; index_arg < arguments.length; ++index_arg)
	{
		let arg = arguments[index_arg];
		if (!obj.includes(arg))
			return false;
	}

	return true;
};