let {defineSupportCode} = require('cucumber');
let chai = require('chai')
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);


defineSupportCode(function({Then, When, setDefaultTimeout}) {

  // setDefaultTimeout(60 * 1000);

  When(/^I go to github$/, function () {
    return browser.get('https://github.com/');
  });

  When(/^I should see a header logo$/, function () {
    return expect($('.header-logo-invertocat').isDisplayed()).to.eventually.equal(true);
  });
});