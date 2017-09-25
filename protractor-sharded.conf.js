const _ = require('lodash');
const glob = require('glob');
const fs = require('fs');
const argv = require('yargs').argv

exports.config = _.tap(_.clone(require('./protractor-base.conf.js').config), function (config) {
  // TODO add ability to set maxSessions
  config.maxSessions = 3;
  config.getMultiCapabilities = function () {
    let files;
    let hasTags = hasCucumberTags(config);

    if(hasTags) {
      files = getSpecsWithTags(config);
    } else {
      files = getSpecFiles();
    }
    
    return _.map(files, function (file, i) {
      return {
          browserName: 'chrome',
          specs: file,
          shardTestFiles: true,
          maxInstances: 4 // TODO add dynamic way of setting maxInstances
        }
    });
  }

  function getSpecFiles() {
    // TODO add dynamic way of setting specs
    // TODO filter out files that do not include tagged scenarios
    let files = glob.sync('test/features/**/*.feature');
    return files;
  }

  function getSpecsWithTags(config) {
    let cliTags = getCucumberCliTags(config);
    return _.flatten(_.map(glob.sync('test/features/**/*.feature'), function (file) {
      return _.reduce(fs.readFileSync(file, 'utf8').split('\n'), function (memo, line, i) {
        if(line.match(/@/)) {
          let tags = line.split(/(?=@)/g);
          _.forEach(tags, function (tag) {
            if(cliTags.includes(tag)) {
              memo.push(file);
            }
          });
        }
        return _.sortedUniq(memo);
      }, []);
    }));
  }

  function getCucumberCliTags(config) {
    let tags = config.cucumberOpts.tags || process.cucumberOpts.tags;

    let tagArray = tags.split(' ');
    let finalTags = [];
    _.forEach(tagArray, function (possibleTag) {
      if(possibleTag.match(/@/)) {
        finalTags.push(possibleTag);
      }
    });
    return finalTags;
  };

  function hasCucumberTags(config) {
    let hasTags = false;
    if(argv.cucumberOpts) {
      hasTags = !_.isUndefined(argv.cucumberOpts.tags);
    } else {
      hasTags = !_.isUndefined(config.cucumberOpts.tags);
    }
    return hasTags;
   };
});