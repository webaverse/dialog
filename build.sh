#!/bin/bash

# source ../emsdk/emsdk_env.sh 

pushd mediasoup-client
parcel build --target=browser lib/index.js
popd

pushd client/protoo-client
NODE_ENV=development parcel build --target=browser lib/index.js # --no-minify
cat ../prefix.js dist/index.js ../suffix.js >build.js
js-beautify -r build.js
popd

pushd client/mediasoup-client
NODE_ENV=development parcel build --target=browser lib/index.js # --no-minify
cat ../prefix.js dist/index.js ../suffix.js >build.js
js-beautify -r build.js
popd