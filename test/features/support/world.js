var {defineSupportCode} = require('cucumber');

function CustomWorld() {
	let chai = require('chai')
	let chaiAsPromised = require('chai-as-promised');
	this.expect = chai.expect;
	chai.use(chaiAsPromised);
}

defineSupportCode(function({setWorldConstructor, setDefaultTimeout}) {
  setWorldConstructor(CustomWorld);
  setDefaultTimeout(60 * 1000);
});