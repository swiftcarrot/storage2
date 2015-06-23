# require-storage
html5 storage interface for node and browser

1. node: simple memory storage
2. return storage object directly for browser with storage available
3. cookie fallback for browser without storage

### Installation
``` sh
npm install require-storage --save
```
### Usage
``` javascript
var localStorage = require('require-storage').localStorage;
var sessionStorage = require('require-storage').sessionStorage;
```
### API
[Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) 
