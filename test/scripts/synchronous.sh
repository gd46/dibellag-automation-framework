#! /usr/bin/env bash

echo 'Synchronous Testing';

(npm run test:fast -- --cucumberOpts.tags @example && 
npm run test:fast -- --cucumberOpts.tags @example2)