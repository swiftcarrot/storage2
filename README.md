# storage2
[![Build Status](https://travis-ci.org/pqx/require-storage.svg)](https://travis-ci.org/pqx/require-storage)

One single html5 storage interface for node and browser (`browserify`)

1. `node`: simple memory storage
2. `browser with storage api available`: return storage object directly (`window.localStorage` and `window.sessionStorage`)
3. `browser without storage api`: cookie fallback

### Installation
``` sh
npm install storage2 --save
```
### Usage
``` javascript
var ls = require('storage2').localStorage;
var ss = require('storage2').sessionStorage;
```
### API
[Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
### License
ISC
