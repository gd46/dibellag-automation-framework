module.exports = {
	setup: () => {
		browser.waitForAngularEnabled(false);
		let { pageObjectInstances } = require('page-object-loader');
		browser.pages = pageObjectInstances;
	}
};
