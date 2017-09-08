let {defineSupportCode, Status} = require('cucumber');
let {writeScreenShot, writeJsonObject} = require('../../lib/util');

defineSupportCode(function({After}) {
  
  After(function (testCase) {
    console.log('testCase', testCase);
    // if (testCase.result.status === Status.FAILED) {
    //     // Attaching screenshot
           // writeJsonObject(this.attach, testCase);
    //     return writeScreenShot(this.attach);
    // }
  });
});