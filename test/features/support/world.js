var {defineSupportCode} = require('cucumber');

function CustomWorld() {
  
}

defineSupportCode(function({setWorldConstructor, setDefaultTimeout}) {
  setWorldConstructor(CustomWorld);
  setDefaultTimeout(60 * 1000);
});