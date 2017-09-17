module.exports = {
	setup: () => {
		browser.waitForAngularEnabled(false);
		let pages = require('page-object-loader');
		browser.pages = pages;
	}
};
