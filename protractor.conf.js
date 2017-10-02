let { LocalConfig, CiConfig } = require('./configuration');

let ciConfigInstance = new CiConfig();

if(ciConfigInstance.getSeleniumAddress()) {
  exports.config = ciConfigInstance;
} else {
  exports.config = new LocalConfig();
}