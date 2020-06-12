#!/bin/bash

# source ../emsdk/emsdk_env.sh 

pushd mediasoup-client
parcel build --target=browser lib/index.js
popd

pushd protoo-client
NODE_ENV=development parcel build --target=browser lib/index.js # --no-minify
cat ../prefix.js dist/index.js ../suffix.js >build.js
js-beautify -r build.js
popd

pushd mediasoup-client
NODE_ENV=development parcel build --target=browser lib/index.js # --no-minify
cat ../prefix.js dist/index.js ../suffix.js >build.js
js-beautify -r build.js
popd