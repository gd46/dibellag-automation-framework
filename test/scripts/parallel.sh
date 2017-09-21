#! /usr/bin/env bash

echo 'Parallel Testing';

npm run test:ci -- --cucumberOpts.tags @example & 
npm run test:ci -- --cucumberOpts.tags @example2