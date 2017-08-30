function PageObjectsLoader() {
  
  let fs = require('fs');
  let _ = require('lodash');
  let pathToPages = 'test/features/pages';

  fs.readdir(pathToPages, (err, files) => {
    if( err ) {
      console.error( "Could not list the directory.", err );
      process.exit( 1 );
    } 
    files.forEach((file, index) => {
      let fileNameWithoutExtension = file.replace('.js', '');
      let splitFileNameOnDot = fileNameWithoutExtension.split('.');
      let pageName = '';
      let pages = {};
      splitFileNameOnDot.forEach((filePieces) => {
        pageName += _.capitalize(filePieces);
        pages = `${pageName}: require('${pathToPages}/${fileNameWithoutExtension}')`;
      });
      console.log('pages', pages);
      console.log('pageName', pageName);
      console.log('fileNameWithoutExtension', fileNameWithoutExtension);
      console.log('splitFileNameOnDot', splitFileNameOnDot);
    });
  });
}
module.exports.PageObjectsLoader = PageObjectsLoader;
