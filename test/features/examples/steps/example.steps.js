let {defineSupportCode} = require('cucumber');

defineSupportCode(function({Then, When, setDefaultTimeout}) {

  // setDefaultTimeout(60 * 1000);

  let examplePage = new browser.pages.Example();

  When(/^I go to github$/, function () {
    return browser.get('https://github.com/');
  });

  When(/^I should see a header logo$/, function () {
    return this.expect(examplePage.headerLogo.isDisplayed()).to.eventually.equal(true);
  });
});