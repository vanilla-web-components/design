#!/usr/bin/env bash

set -euxo pipefail

DIST="dist"

rm -rf ${DIST}
mkdir dist

# execute src/gen-color-classes.js
node src/gen-color-classes.js

# Compile CSS files to dist directory
cp src/*.css dist/

if [ -f "src/index.js" ]; then
    # Copy index.js to dist directory
    cp src/index.js dist/
fi


