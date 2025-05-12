#!/usr/bin/env bash

set -euxo pipefail

DIST="dist"

rm -rf ${DIST}
mkdir dist

# Define file names
COLOR="color"
INDEX="index"

# Compile CSS files to dist directory
cp src/${COLOR}.css dist/
cp src/${INDEX}.css dist/

if [ -f "src/index.js" ]; then
    # Copy index.js to dist directory
    cp src/index.js dist/
fi
