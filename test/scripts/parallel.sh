#! /usr/bin/env bash

echo 'Parallel Testing';

npm run test:ci -- --browserName chrome --cucumberOpts.tags @example & 
npm run test:ci -- --browserName chrome --cucumberOpts.tags @example2