parse-browserify
================

I needed to tweak the parse js SDK a little for it to work with browserify, very minor change:

```
// Import Parse's local copy of underscore.
  //Browserify transform
  //if (typeof(exports) !== "undefined" && exports._) {
    // We're running in Node.js.  Pull in the dependencies.
    Parse._ = exports._.noConflict();
    //Parse.localStorage = require('localStorage');
    //Parse.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    exports.Parse = Parse;
  //} else {
    //Parse._ = _.noConflict();
    if (typeof(localStorage) !== "undefined") {
      Parse.localStorage = localStorage;
    }
    if (typeof(XMLHttpRequest) !== "undefined") {
      Parse.XMLHttpRequest = XMLHttpRequest;
    }
  //}
```

This is how it can be used in the browser:


```
var Parse = require('parse').Parse;

Parse.initialize(APP_ID, JS_KEY);

module.exports = Parse;

```

This is my first contribution to NPM!! I need to test it a little, but I like it here because I'm using it in multiple projects simultaneously. 

