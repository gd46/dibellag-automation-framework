#! /usr/bin/env bash

echo 'Parallel Testing';

npm run test:fast -- --cucumberOpts.tags @example & 
npm run test:fast -- --cucumberOpts.tags @example2