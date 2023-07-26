rm -rf test-site/dist
mkdir test-site/dist
npx esbuild ./test-site/src/index.jsx --bundle --sourcemap --outfile=./test-site/dist/out.js
cp test-site/index.html test-site/dist
cp \
    node_modules/@k4ung/vad-web/dist/*.onnx \
    node_modules/@k4ung/vad-web/dist/vad.worklet.bundle.min.js \
    node_modules/onnxruntime-web/dist/*.wasm \
    test-site/dist
