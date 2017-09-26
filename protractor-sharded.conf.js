const _ = require('lodash');
const glob = require('glob');
const fs = require('fs');
const argv = require('yargs').argv

exports.config = _.tap(_.clone(require('./protractor-base.conf.js').config), function (config) {

  config.maxSessions = setMaxSessions(config);

  /*
   * Capability to run feature file in parallel
   * or open and close the browser per feature file
   */ 
  config.getMultiCapabilities = function () {
    let files;
    let hasTags = hasCucumberTags(config);

    if(hasTags) {
      files = getFeaturesWithTags(config);
    } else {
      files = getFeatures();
    }

    return _.map(files, function (file, i) {
      return {
          browserName: 'chrome',
          specs: file,
          shardTestFiles: true,
          maxInstances: 1
        }
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
   * Filters out specs that dont contain tags
   * to work better with protractor sharding
   */
  function getFeaturesWithTags(config) {
    let cliTags = getCucumberCliTags(config);
    return _.flatten(_.map(getFeatures(), function (file) {
      return _.reduce(fs.readFileSync(file, 'utf8').split('\n'), function (memo, line, i) {
        if(line.match(/@/)) {
          let tags = line.split(/(?=@)/g);
          _.forEach(tags, function (tag) {
            if(cliTags.includes('not') && tag !== (cliTags[cliTags.indexOf('not') + 1])) {
              memo.push(file);
            } else if(cliTags.includes(tag)) {
              memo.push(file);
            }
          });
        }
        return _.sortedUniq(memo);
      }, []);
    }));
  }

  /*
   * Gets cucumber tags from the config
   * or from command line args
   */
  function getCucumberCliTags(config) {
    let tags = config.cucumberOpts.tags || argv.cucumberOpts.tags;

    let tagArray = tags.split(' ');
    let finalTags = [];
    _.forEach(tagArray, function (possibleTag, index) {
      possibleTag = possibleTag.replace(/\(/g, '').replace(/\)/g, '');
      if(possibleTag.match(/@/)) {
        finalTags.push(possibleTag);
      } else if(possibleTag.match(/not/)) {
        finalTags.splice(index+1, 0, possibleTag)
      }
    });
    return finalTags;
  };

  /*
   * Checks to see if cucumber tags 
   * exist via command line args or config
   */
  function hasCucumberTags(config) {
    let hasTags = false;
    if(argv.cucumberOpts) {
      hasTags = !_.isUndefined(argv.cucumberOpts.tags);
    } else {
      hasTags = !_.isUndefined(config.cucumberOpts.tags);
    }
    return hasTags;
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