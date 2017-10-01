const argv = require('yargs').argv;
const _ = require('lodash');

class BaseConfig {
	constructor() {
		this.framework = 'custom';
		this.frameworkPath = require.resolve('protractor-cucumber-framework');
		this.plugins = [{
	    path: './test/features/plugins/setup.js'
	  }];
	  this.specs = argv.specs || 'test/features/**/*.feature';
	  this.allScriptsTimeout = 30000;
	  this.disableChecks = true;
	  this.cucumberOpts = {
		    timeout: 30000,
		    format: this.getCucumberFormat(),
		    snippetInterface: 'promise',
		    require: [
		      'test/features/steps/**/*.steps.js'
		    ]
	  };
	  this.capabilities = this.getBrowserConfig();
	}

	getCucumberFormat() {
		// shardTestFiles already adds process id
		if(!argv.p) { 
			return `json:test/output/results-${process.pid}.json`;
		} else {
			return 'json:test/output/results.json';
		}
	}

	getBrowserConfig() {
		let browserConfig = {
		 	'chrome': {
		 		'browserName': 'chrome'
		 	}
		}
		return browserConfig[argv.browserName];
	}
}

class LocalConfig extends BaseConfig {
	constructor() {
		super();
		if (argv.browserName === 'chrome') {
			this.directConnect = true;
		}
	}
}

class CiConfig extends BaseConfig {
	constructor() {
		super();
		this.seleniumAddress = this.getSeleniumAddress();
	}

	getSeleniumAddress() {
		return argv.seleniumAddress || this.getGrid();
	}

	getGrid() {

	}
}

module.exports = {
	BaseConfig: BaseConfig,
	LocalConfig: LocalConfig,
	CiConfig: CiConfig
}