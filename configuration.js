const _ = require('lodash');
const glob = require('glob');
const argv = require('yargs').argv
const { PickleFilter, getTestCasesFromFilesystem } = require('cucumber');
const { EventEmitter } = require('events');
const eventBroadcaster = new EventEmitter();

class BaseConfig {
	constructor() {
		this.framework = 'custom';
		this.frameworkPath = require.resolve('protractor-cucumber-framework');
		this.plugins = [{
	    path: './test/features/plugins/setup.js'
	  }];
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
	  if(!argv.p) {
	  	this.specs = argv.features || 'test/features/**/*.feature';
	  	this.capabilities = this.getBrowserConfig();
	  } else {
	  	this.maxSessions = this.getMaxSessions();
	  	this.getMultiCapabilities = () => {
	  		let self = this;
	  		return this.getFeaturesWithTags().then((files) => {
		       return _.map(files, function (file, i) {
		        let config = {
		        	specs: file,
		        	shardTestFiles: true,
		        	maxInstances: 1
		        };
		        return _.merge(config, self.getBrowserConfig());
		      });
		    });
	  	};
	  }
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
		 	},
		 	'chrome-headless': {
		 		'browserName': 'chrome',
		 		'chromeOptions': {
			     'args': [ "--headless", "--disable-gpu", "--window-size=1300x1000" ]
			   }
		 	},
		 	'firefox': {
		 		'browserName': 'firefox',
		 		'marionette': true
		 	},
		 	'safari': {
		 		'browserName': 'safari'
		 	}
		}
		return browserConfig[argv.browserName];
	}

	/*
   * Returns all feature files that match pattern
   */
  getFeatures() {
    let filesGlob = argv.features || 'test/features/**/*.feature';
    let files = glob.sync(filesGlob);
    return _.sortedUniq(files);
  }

  /*
   * Use cucumber built in methods
   * to filter features based on expression
   */
  getFeaturesWithTags() {
    return getTestCasesFromFilesystem({
      cwd: '',
      eventBroadcaster: eventBroadcaster,
      featurePaths: this.getFeatures(),
      pickleFilter: new PickleFilter({
        tagExpression: this.getCucumberCliTags()
      })
    }).then(function (results) {
      let specs = [];
      _.forEach(results, function (result) {
        specs.push(result.uri);
      });
      return _.sortedUniq(specs);
    });
  }

  getCucumberCliTags() {
    return _.get(argv, 'cucumberOpts.tags') || '';
  }

  getMaxSessions() {
    return argv.maxSessions || 1;
  }
}

class LocalConfig extends BaseConfig {
	constructor() {
		super();
		if (!argv.browserName === 'safari') {
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