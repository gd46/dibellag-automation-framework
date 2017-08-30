module.exports = {
  scrollIntoView: (el) => {
    browser.executeScript((el) => {
      el.scrollIntoView();
    }, el.getWebElement());
    return browser.sleep(2000); //TODO introduce a promise library to always return a promise
  }
}