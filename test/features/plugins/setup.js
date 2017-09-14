module.exports = {
	setup: () => {
		browser.waitForAngularEnabled(false);
		let pages = require('../../lib/page-object-loader');
		browser.pages = pages;
	}
};
