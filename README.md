# dibellag-automation-framework
A protractor cucumber automation framework built using the latest
versions of each. The goal is to display an automation framework with working
examples of how to use these latest packages. 

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://travis-ci.org/gd46/dibellag-automation-framework.svg?branch=master)](https://travis-ci.org/gd46/dibellag-automation-framework)

## Dependencies

NOTE: This framework maybe usable on lower versions of node and npm. 
However, these are the versions this project was built and test with.

```
npm  ->  5.3.0
node ->  v8.4.0
java -> 8
```
## Supported Browsers

| Browser | Description | Direct Connect | 
| ------- |:-----------:| --------------:|
| Chrome  | Works with most latest versions | Yes |
| Chrome Headless | Latest couple versions  | Yes |
| Firefox | 56+ | Yes |
| Safari | Needs latest version. Setup required: It can be turned on by opening Safari preferences (Safari > Preferences in the menu bar), going to the Advanced tab, and ensuring that the Show Develop menu in menu bar checkbox is checked. Enable Remote Automation in the Develop menu. This is toggled via Develop > Allow Remote Automation in the menu bar. | No |

## Try it now

NOTES: This will run a set of example scenarios that are setup to outline the latest features of cucumber and how to work it.

```
npm install
npm test
```

## Available npm scripts

| npm script    	| description   | defaults | 
| ------------- 	|:-------------:| --------:|
| npm test      	| runs report cleanup as pretest, and runs protractor config | 
| npm run test:ci   | runs tests on grid  | --seleniumAddress=http://127.0.0.1:4444/wd/hub |
| npm run test:elementExplorer | opens protractors elementExplorer, needs to be run after webdriver-manager has been started in a different tab | 
| npm run test:dry-run | runs cucumber dry run | --browserName chrome |
| npm run  test:unit | run framework unit tests | 
| npm run  test:scripts:parallel | bash example of parallel | 
| npm run  test:scripts:synchronous | bash example of synchronous |
| npm run  test:scripts:ignore-failure | bash example that ignore the firs task failure and runs second task | 
| npm run report:cleanup | deletes and recreates test/output directory | 
| npm run report:generate | runs and opens local html report | 
| npm run webdriver-manager:update | updates browser drivers | 
| npm run webdriver-manager:start | starts local webdriver server, to be run in a separate tab before running elementExplorer command | 
| npm run webdriver-manager:setup | will update and start webdriver server | 
| npm run lint | runs gherkin and eslint rules(including protractor) | 
| npm run lint:fix | fixes the lint rules that are able to be fixed automatically | 
| npm run lint:gherkin | runs just gherkin lint rules | 
| npm run lint:es | runs just eslint rules | 
| npm run commit | runs git cz to help format commits to follow semantic release |

## Available cli flags

| cli flag      | description   | defaults |
| ------------- |:-------------:| --------:|
| --parallel-features            | runs each feature with a new browser | 
| --parallel-scenarios | runs each scenarios with a new browser | 
| --maxSessions | controls how many browsers run at the same time. To be used with -p flag.| 1 |
| --browserName | which browser to run the tests in, currently supports (chrome, chrome-headless, firefox, safari)      | 
| --cucumberOpts.tags | supports a string [tag expression](https://github.com/cucumber/cucumber/tree/master/tag-expressions) |
| --features | supports passing in a glob of features to run |

## Linters

### Resources
[JSDOC](https://eslint.org/docs/rules/valid-jsdoc)
[ESLint](https://eslint.org/docs/rules/)
[Google](https://github.com/google/eslint-config-google)

Lint rules have been setup based on eslint and google recommendations,
along with gherkin and protractor lint rules. 

The following lint tasks are available:

```json
"lint": "(npm run lint:gherkin; npm run lint:es)",
"lint:fix": "eslint test/** --fix",
"lint:gherkin": "gherkin-lint",
"lint:es": "eslint test/**"
```    

These are the protractor lint rules that will be turned on.
Investigating why it throws error when there isnt a case for it.

TODO: Try adding back: "plugin:protractor/recommended" in the extends, and find out why each rule needs protractor/ in front of it to work. 

Settings for protractor rules: 
```
2 - error
1 - warning
0 - off
```

## How to use protractor's elementExplorer

1. Run the below command in one terminal tab
```
npm run webdriver-manager:setup
```
This will update webdriver-manager and start it

2. Run the below command in a second terminal tab
```
npm run test:elementExplorer
``` 
3. Testing selectors
```
You can now navigate to any url and run protractor 
commands to test your selectors and functions.
```

## Bash cli differences

1. How to run a task one after the other regardless if the first one passes
```
npm run test:scripts:ignore-failure
```

2. How to run tasks synchronously
```
npm run test:scripts:synchronous
```

3. How to run tasks in parallel
```
npm run test:scripts:parallel
```
See example of parallel execution in ./test/scripts/parallel.sh

## Add a script to the scripts directory

After adding a script to the scripts directory you needs to run
the following command to make it executable:

```
chmod +x fileName
```

## Running tests in parallel

In order to run each feature file with a new browser 

```
npm test -- --parallel-features --browserName chrome
```

In order to run multiple features in parallel

```
npm test -- --parallel-features --browserName chrome --maxSessions 2
```

In order to run each scenario in a new browser

```
npm test -- --parallel-scenarios --browserName chrome
```

In order to run each scenario in parallel

```
npm test -- --parallel-scenarios --browserName chome --maxSessions 2
```

Pass the maxSessions flag with the number of features/scenarios you want to run in parallel. 

## Running test by tag

```
npm test -- --browserName chrome --cucumberOpts.tags "@tag_expression"
```

## Running test by tag expression

```
npm test -- --browserName chrome --cucumberOpts.tags "(@tag1 and @tag2) and not @wip"
```

See [cucumber tag expressions](https://github.com/cucumber/cucumber/tree/master/tag-expressions) for more examples

## Contributing

This project uses [Commitizen](https://github.com/commitizen/cz-cli)
to enforce [Semantic Releases](https://github.com/semantic-release/semantic-release)

## TODOs

1. Mock setup
2. Fuctions for executing requests
3. Custom reporter
4. Cross browser support
5. How to best handle non-angular websites
6. Create test app to provide examples for the following test cases: 	
	6.1. Angular app
	6.2. Non Angular page
	6.3. Modals
	6.4. Iframes
	6.5. New tabs

## FAQ

### The world instance isn't available in my hooks or step definitions.

This has frequently been caused by the use of ES6 arrow functions. You cannot use ES6 arrow functions for step definitions or hooks because they bind this to the current context which prevents the world instance from being injected.

### Why do my definition patterns need to be globally unique instead of unique only within Given, When, Then?

To encourage a ubiquitous, non-ambiguous domain language. Using the same language to mean different things is basically the definition of ambiguous. If you have similar Given and Then patterns, try adding the work "should" to your Then pattern


