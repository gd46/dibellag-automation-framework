exports.config = {
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  directConnect: true,

  plugins: [{
    path: './test/features/plugins/setup.js'
  }],

  cucumberOpts: {
    timeout: 30000,
    format: 'json:test/output/results.json',
    snippetInterface: 'promise',
    require: [
      'test/features/steps/**/*.steps.js'
    ]
  },
  allScriptsTimeout: 30000,
  disableChecks: true
};