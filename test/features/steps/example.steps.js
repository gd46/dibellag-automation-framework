let {defineSupportCode} = require('cucumber');
let chai = require('chai')
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);
let pages = require('../../lib/page-object-loader');

defineSupportCode(function({Then, When, setDefaultTimeout}) {

  // setDefaultTimeout(60 * 1000);

  // let pages = loader(); //TODO once this works move to world or onPrepare
  console.log('pages in step', pages);
  let examplePage = new pages.Example();

  When(/^I go to github$/, function () {
    return browser.get('https://github.com/');
  });

  When(/^I should see a header logo$/, function () {
    return expect(examplePage.headerLogo.isDisplayed()).to.eventually.equal(true);
  });
});