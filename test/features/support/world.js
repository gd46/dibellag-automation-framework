let { setWorldConstructor, setDefaultTimeout } = require('cucumber');
/**
 * CustomWorld
 * maintains default behavior
 * adds chai expect and setup chai as promised
 * sets up default step and hook timeout
 */
function CustomWorld ({ attach, parameters }) {
	// Apply default world functionality
	this.attach = attach;
  this.parameters = parameters;

	let chai = require('chai');
	let chaiAsPromised = require('chai-as-promised');
	this.expect = chai.expect;
	chai.use(chaiAsPromised);
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60 * 1000);
