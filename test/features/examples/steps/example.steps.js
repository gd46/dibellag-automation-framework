let {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then, setDefaultTimeout}) {

  let examplePage = new browser.pages.Example();

  When(/^I go to github$/, function () {
    return browser.get('https://github.com/');
  });

  When(/^I should see a header logo$/, function () {
    return this.expect(examplePage.headerLogo.isDisplayed()).to.eventually.equal(true);
  });

  Given('I have {int} cucumbers in my {belly}', function(int, belly) {
  	this.expect(belly).to.equal('BELLY');
    return this.expect(int).to.equal(42);
  });
});