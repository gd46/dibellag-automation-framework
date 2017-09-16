let glob = require('glob');
let _ = require('lodash');
let path = require('path');
let pages = {};

  let filePaths = glob.sync('**/*.page.js', {
    nonull: true
  });

  filePaths.forEach((filePath) => {
      // extract file name without the extension
      let fileName =  path.basename(filePath, '.js');
      /*
        create the file name pieces and take the first 
        which is the name and format it
      */
      let pageName = _.camelCase(fileName.split('.', 1)[0]);
      // make the file name match the name of the page object function or class
      let pageObjectName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
      pages[pageObjectName] = require(path.resolve(`${filePath}`));
    });

module.exports = pages;
