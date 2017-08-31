// function PageObjectsLoader() {
  
//   let glob = require("glob");
//   let _ = require('lodash');

//   glob("**/*.page.js", {
//     nonull: true
//   }, (er, filePaths) => {
//     let pages = {};
//     filePaths.forEach((filePath) => {
//       let fileName = filePath.split(/(\\|\/)/g).pop(); // extract file name with extension
//       let pageName = _.camelCase(fileName.split('.', 1)[0]); // create the file name pieces and take the first which is the name and format it
//       let pageObjectName = pageName.charAt(0).toUpperCase() + pageName.slice(1); // make the file name match the name of the page object function or class
//       pages[pageObjectName] = require(`./${filePath}`);
//     });
//     console.log('pages', pages);
//     return pages;
//   });
// }
// module.exports = PageObjectsLoader;

// let glob = require("glob");
// let _ = require('lodash');
// let pages = {};
//   glob("**/*.page.js", {
//     nonull: true
//   }, (er, filePaths) => {
//     filePaths.forEach((filePath) => {
//       let fileName = filePath.split(/(\\|\/)/g).pop(); // extract file name with extension
//       let pageName = _.camelCase(fileName.split('.', 1)[0]); // create the file name pieces and take the first which is the name and format it
//       let pageObjectName = pageName.charAt(0).toUpperCase() + pageName.slice(1); // make the file name match the name of the page object function or class
//       pages[pageObjectName] = require(`../../${filePath}`);
//     });
//     console.log('pages', pages);
//   });

let glob = require("glob");
let _ = require('lodash');
let pages = {};

  let filePaths = glob.sync("**/*.page.js", {
    nonull: true
  });

  filePaths.forEach((filePath) => {
      let fileName = filePath.split(/(\\|\/)/g).pop(); // extract file name with extension
      let pageName = _.camelCase(fileName.split('.', 1)[0]); // create the file name pieces and take the first which is the name and format it
      let pageObjectName = pageName.charAt(0).toUpperCase() + pageName.slice(1); // make the file name match the name of the page object function or class
      pages[pageObjectName] = require(`../../${filePath}`);
    });
    console.log('pages', pages);

module.exports = pages;