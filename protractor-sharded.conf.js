const SHARD_COUNT = exports.SHARD_COUNT = +(process.env.PROTRACTOR_SHARD_COUNT || 4);

const _ = require('lodash');
const glob = require('glob');
const fs = require('fs');

exports.config = _.tap(_.clone(require('./protractor-base.conf.js').config), function (config) {
  // TODO add ability to set maxSessions
  config.maxSessions = 3;
  config.getMultiCapabilities = function () {
    let files = getSpecFiles();
    let filesWithTags = getSpecsWithTags(config);
    console.log('filesWithTags', filesWithTags);
    return _.map(files, function (file, i) {
      return {
          browserName: 'chrome',
          specs: file,
          shardTestFiles: true,
          maxInstances: 2 // TODO add ability to set maxInstances 
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
    let fs = require('fs');
    let files = glob.sync('test/features/**/*.feature');
    let tags = getCucumberTags(config);
    let taggedFiles = [];
    _.forEach(files, function (file, i) {
      // let readStream = fs.createReadStream(file, 'utf8');

      // readStream.on('data', function (chunk) {
        // if(chunk.indexOf('@test') > -1) {
        //   taggedFiles.push(file);
        //   console.log('has example tag');
        // }
      // }).on('end', function () {
      //   console.log('finished reading files');
      // });
      let fileContents = fs.readFileSync(file, 'utf8');
      console.log('tags', tags);
      _.forEach(tags, function (tag) {
        if(fileContents.indexOf(tag) > -1) {
          taggedFiles.push(file);
          console.log('has example tag');
        }
      });
    });
    return _.sortedUniq(taggedFiles);
  }

  function getCucumberTags(config) {
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
});