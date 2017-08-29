exports.config = {
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'test/feature/**/*.feature'
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
    require: [
      'test/feature/steps/**/*.steps.js'
    ]
  },
  allScriptsTimeout: 30000
};