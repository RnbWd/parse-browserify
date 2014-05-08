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
 
Parse.initialize("Your App Id", "Your JavaScript Key");
 
var query = new Parse.Query(Parse.User);
query.find({
  success: function(users) {
    for (var i = 0; i < users.length; ++i) {
      console.log(users[i].get('username'));
    }
  }
});

```

This is my first contribution to NPM!! I need to test it a little, but I like it here because I'm using it in multiple projects simultaneously.

<david.wisner@dympl.com>

## LICENSE

The MIT License (MIT)

Copyright (c) 2014 Jason Sandmeyer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

