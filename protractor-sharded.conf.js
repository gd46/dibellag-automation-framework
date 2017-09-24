const SHARD_COUNT = exports.SHARD_COUNT = +(process.env.PROTRACTOR_SHARD_COUNT || 4);

const _ = require('lodash');
const glob = require('glob');
const fs = require('fs');

exports.config = _.tap(_.clone(require('./protractor-base.conf.js').config), function (config) {
  // TODO add ability to set maxSessions
  config.maxSessions = 3;
  config.getMultiCapabilities = function () {
    let files = getSpecFiles();
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
});