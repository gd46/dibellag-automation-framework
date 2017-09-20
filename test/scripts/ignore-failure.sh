#! /usr/bin/env bash

echo 'Ignore Failure Testing';

(npm run lint:gherkin; npm run lint:es)