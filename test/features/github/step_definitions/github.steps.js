let { Given, Then } = require('cucumber');
let github = browser.pages.Github;

Given('I go to github', function () {
  return browser.get('https://github.com/');
});

Then('I should see a header logo', function () {
  return this.expect(github.headerLogo.isDisplayed())
    .to.eventually.equal(true);
});
