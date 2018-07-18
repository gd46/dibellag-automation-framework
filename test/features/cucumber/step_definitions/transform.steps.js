let { Given } = require('cucumber');

Given('I have cucumbers in my {belly}', function (belly) {
  return this.expect(belly).to.equal('BELLY');
});

Given('I have {int} cucumbers', function (int) {
  return this.expect(int).to.equal(42);
});

Given('I am {string} years old', function (string) {
  return this.expect(string).to.equal('24');
});

Given('I am {float} ft tall', function (float) {
  return this.expect(float).to.equal(6.1);
});

Given('I like to watch {word} movies', function (word) {
  return this.expect(word).to.equal('scary');
});
