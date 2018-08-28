let { defineParameterType } = require('cucumber');
let Promise = require('bluebird');

defineParameterType({
  regexp      : /belly/,
  transformer : (s) => Promise.resolve(s.toUpperCase()),
  name        : 'belly'
});
