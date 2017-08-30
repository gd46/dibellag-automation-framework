exports.config = {
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'test/features/**/*.feature'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  directConnect: true,

  onPrepare: function () {
    browser.waitForAngularEnabled(false);
  },

  cucumberOpts: {
    timeout: 30000,
    format: 'json:test/output/results.json',
    snippetInterface: 'promise',
    require: [
      'test/features/steps/**/*.steps.js'
    ]
  },
  allScriptsTimeout: 30000
};