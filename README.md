# dibellag-automation-framework
A protractor cucumber automation framework built using the latest
versions of each. The goal is to display an automation framework with working
examples of how to use these latest packages. 

## Dependencies

NOTE: This framework maybe usable on lower versions of node and npm. 
However, these are the versions this project was built and test with.

```javascript
npm  ->  5.3.0
node ->  v8.4.0
```

## Try it now

NOTES: This will run a set of example scenarios that are setup to outline the latest features of cucumber and how to work it.

```javascript
npm install
npm test
```

## Linters

### Resources
[JSDOC](https://eslint.org/docs/rules/valid-jsdoc)
[ESLint](https://eslint.org/docs/rules/)
[Google](https://github.com/google/eslint-config-google)

Lint rules have been setup based on eslint and google recommendations,
along with gherkin and protractor lint rules. 

The following lint tasks are available:

```json
"lint": "npm run lint:gherkin && npm run lint:es",
"lint:fix": "eslint test/** --fix",
"lint:gherkin": "gherkin-lint",
"lint:es": "eslint test/**"
```    

These are the protractor lint rules that will be turned on.
Investigating why it throws error when there isnt a case for it.

"plugin:protractor/recommended"
2 - error
1 - warning
0 - off
"no-browser-sleep": 2,
"no-browser-pause": 2,
"missing-wait-message": 2,
"no-by-xpath": 2,
"no-browser-driver": 2,
"by-css-shortcut": 2,
"no-execute-script": 2,
"use-first-last": 2,
"no-invalid-selectors": 2,
"no-array-finder-methods": 2,
"valid-locator-type": 2,
"no-compound-classes": 2,
"no-get-inner-outer-html": 2,
"no-angular-classes": 2,
"no-angular-attributes": 2,
"no-bootstrap-classes": 2,
"array-callback-return": 2,
"use-promise-all": 2,
"bare-element-finders": 2,
"limit-selector-depth": 2,
"valid-by-tagname": 2,
"valid-by-id": 2,
"use-count-method": 2,
"no-repetitive-selectors": 2,
"no-repetitive-locators": 2,
"correct-chaining": 2

## FAQ

### The world instance isn't available in my hooks or step definitions.

This has frequently been caused by the use of ES6 arrow functions. You cannot use ES6 arrow functions for step definitions or hooks because they bind this to the current context which prevents the world instance from being injected.

### Why do my definition patterns need to be globally unique instead of unique only within Given, When, Then?

To encourage a ubiquitous, non-ambiguous domain language. Using the same language to mean different things is basically the definition of ambiguous. If you have similar Given and Then patterns, try adding the work "should" to your Then pattern


