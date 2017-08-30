var {defineSupportCode} = require('cucumber');

function CustomWorld() {
  
}

console.log('loaded');

defineSupportCode(function({setWorldConstructor, setDefaultTimeout}) {
  setWorldConstructor(CustomWorld);
  console.log('set');
  setDefaultTimeout(60 * 1000);
});