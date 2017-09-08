let Promise = require('bluebird');

module.exports = {
  scrollIntoView: (el) => {
    return Promise.resolve(browser.executeScript((el) => {
      el.scrollIntoView();
    }, el.getWebElement()));
  },
  writeScreenShot: (attach) => {
   	return browser.takeScreenshot().then((png) => {
        attach(new Buffer(png, 'base64'), 'image/png');
    });
   },
  writeJsonObject: (attach, json) => {
  	return attach(new Buffer.from(JSON.stringify(json)), 'application/json');
  } 
}