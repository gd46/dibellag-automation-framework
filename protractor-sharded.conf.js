const _ = require('lodash');
const glob = require('glob');
const argv = require('yargs').argv
const { PickleFilter, getTestCasesFromFilesystem } = require('cucumber');
const { EventEmitter } = require('events');
const eventBroadcaster = new EventEmitter();

exports.config = _.tap(_.clone(require('./protractor-base.conf.js').config), function (config) {

  config.maxSessions = setMaxSessions(config);

  /*
   * Capability to run feature file in parallel
   * or open and close the browser per feature file
   */ 
  config.getMultiCapabilities = function () {
    
    return getFeaturesWithTags(config).then((files) => {
       return _.map(files, function (file, i) {
        return {
            browserName: 'chrome',
            specs: file,
            shardTestFiles: true,
            maxInstances: 1
          }
      });
    });
  }


  /*
   * Returns all feature files that match pattern
   */
  function getFeatures() {
    let filesGlob = argv.features || 'test/features/**/*.feature';
    let files = glob.sync(filesGlob);
    return _.sortedUniq(files);
  }

  /*
   * Use cucumber built in methods
   * to filter features based on expression
   */
  function getFeaturesWithTags(config) {
    return getTestCasesFromFilesystem({
      cwd: '',
      eventBroadcaster: eventBroadcaster,
      featurePaths: getFeatures(),
      pickleFilter: new PickleFilter({
        tagExpression: getCucumberCliTags(config)
      })
    }).then(function (results) {
      let specs = [];
      _.forEach(results, function (result) {
        specs.push(result.uri);
      });
      return _.sortedUniq(specs);
    });
  }

  /*
   * Gets cucumber tags from the config
   * or from command line args  or default to
   * empty expression
   */
  function getCucumberCliTags(config) {
    return _.get(config, 'cucumberOpts.tags') || 
           _.get(argv, 'cucumberOpts.tags')   || 
          '';
  };

   /*
    * Controls how many features run in parallel
    * The default is the equivalent to restarting a 
    * browser between tests
    */
   function setMaxSessions(config) {
      return config.maxSessions || argv.maxSessions || 1;
   };
});