let { defineSupportCode } = require('cucumber');
defineSupportCode(function ({ Given, When }) {
  
  let examplePage = browser.pages.Example;

  When(/^I go to github$/, function () {
    return browser.get('https://github.com/');
  });

  When(/^I should see a header logo$/, function () {
    return this.expect(examplePage.headerLogo.isDisplayed())
    .to.eventually.equal(true);
  });

  Given('I have cucumbers in my {belly}', function (belly) {
    return this.expect(belly).to.equal('BELLY');
  });

  Given('I have {int} cucumbers', function (int) {
    return this.expect(int).to.equal(42);
  });
});
