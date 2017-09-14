/**
 * Example page with a github selector
 * Page name cant contain the word page or it wont
 * be automatically included by page-object-loader
 * exports Example page object
 */
function Example () {
  this.headerLogo = $('.header-logo-invertocat');
}

module.exports = Example;
