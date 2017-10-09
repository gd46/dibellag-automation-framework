/**
 * Represents Github page
 * Github page with a github selector
 * Page name cant contain the word page or it wont
 * be automatically included by page-object-loader
 * exports Github page object
 */
class Github {
	/**
	 * @constructor
	 */
	constructor () {
		this.headerLogo = $('.header-logo-invertocat');
	}
}

module.exports = Github;
