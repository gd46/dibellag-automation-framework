#! /usr/bin/env bash

echo 'Synchronous Testing';

(npm run test:ci -- --cucumberOpts.tags @example && 
npm run test:ci -- --cucumberOpts.tags @example2)