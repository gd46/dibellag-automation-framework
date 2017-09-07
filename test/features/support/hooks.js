let {defineSupportCode, Status} = require('cucumber');

defineSupportCode(function({After}) {
  
  After(function (testCase) {
    // if (testCase.result.status === Status.FAILED) {
    //   var stream = getScreenshotOfError();
    //   return this.attach(stream, 'image/png');
    // }
    // Attaching plain text
    // return this.attach('Some text');
    
    // Attaching json object
    // let json = {
    //   "name": "some json"
    // }
    // return this.attach(new Buffer.from(JSON.stringify(json)), 'application/json');
   
    // Attaching screenshot
    // return browser.takeScreenshot().then((png) => {
    //     this.attach(new Buffer(png, 'base64'), 'image/png');
    // });
  });
});