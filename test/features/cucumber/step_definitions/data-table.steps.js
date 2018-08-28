let { Given } = require('cucumber');
Given('a raw table', function (table) {
  // Includes the whole table as an array
  const expected = [
    ['Cucumber', 'Cucumis sativus'],
    ['Burr Gherkin', 'Cucumis anguria']
  ];
  return this.expect(table.raw()).to.deep.equal(expected);
});

Given('a rows table', function (table) {
  // Doesnt include rows row(headers);
  const expected = [
    ['Apricot', '5'],
    ['Brocolli', '2'],
    ['Cucumber', '10']
  ];
  return this.expect(table.rows()).to.deep.equal(expected);
});

Given('a rows hash table', function (table) {
  // Includes the whole table has an object
  const expected = {
    'Cucumber'     : 'Cucumis sativus',
    'Burr Gherkin' : 'Cucumis anguria'
  };
  this.expect(table.rowsHash()).to.deep.equal(expected);
});

Given('a hashes table', function (table) {
  // Includes table as an object with the headers row being the keys
  const expected = [
    { 'Vegetable': 'Apricot', 'Rating': '5' },
    { 'Vegetable': 'Brocolli', 'Rating': '2' },
    { 'Vegetable': 'Cucumber', 'Rating': '10' }
  ];
  this.expect(table.hashes()).to.deep.equal(expected);
});
