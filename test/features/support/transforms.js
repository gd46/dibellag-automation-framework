let { defineSupportCode } = require('cucumber');
let Promise = require('bluebird');

defineSupportCode(({ defineParameterType }) => {
	defineParameterType({
		regexp    		: /belly/,
		transformer	: (s) => Promise.resolve(s.toUpperCase()),
		name    				: 'belly'
	});
});
