# wuji-boku

## Getting over es6 woes
Thank the lord for the [esm module](https://github.com/standard-things/esm) which wraps up any babel pain if you are happy running node differently. Probably not efficient but for general life, just fine.

Just install `yarn add esm` and run with node `node -r esm src/index.js`

## running server
using forever. install with `yarn add forever` then run with `forever -c 'node -r esm' src/index.js`
