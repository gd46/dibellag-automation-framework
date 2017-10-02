#! /usr/bin/env bash

echo 'Synchronous Testing';

(npm run test:ci -- --browserName chrome --cucumberOpts.tags @example && 
npm run test:ci -- --browserName chrome --cucumberOpts.tags @example2)