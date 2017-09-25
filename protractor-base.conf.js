const shell = require('shelljs');
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
  disableChecks: true,
  onPrepare: function () {
    // Run whats in the onCleanup here as well? 
    // Start and end test with a clean node?
  },
  onCleanup: function () {
    shell.exec(`pkill chromedriver`);
    shell.exec('pkill Google Chrome');
    // TODO could kill all other browser times as well
    // Could run cleanup scripts on node
  }
};