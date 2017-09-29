let pickleFilter = require('cucumber').PickleFilter;

let results = new pickleFilter({
	featurePaths: ['test/features/examples/**'],
	name: [],
	tagExpression: '@example'
});

console.log('results', results);

