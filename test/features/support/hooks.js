let { After, Status } = require('cucumber');
let { writeScreenShot, writeJsonObject } = require('../../lib/util');

After(function (testCase) {
  if (testCase.result.status === Status.FAILED) {
    // Attaching screenshot
    writeJsonObject(this.attach, testCase);
    return writeScreenShot(this.attach);
  }
});
