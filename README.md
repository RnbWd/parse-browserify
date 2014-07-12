parse-browserify
================

Parse-SDK-Version: 1.2.18

This is a tweaked version of the Parse SDK meant to be used client-side via [browserify](https://www.npmjs.org/package/browserify). 

```
var Parse = require('parse-browserify');
 
Parse.initialize("Your App Id", "Your JavaScript Key");
 
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});

```
The purpose of this library is to let [Parse](https://www.parse.com) users require the js-sdk clientside. For nodejs users please use the official library [here](https://www.npmjs.org/package/parse). If you run into any bugs let me know, look at the source code, or just use the library as intended by Parse (I'm not affiliated).

<david.wisner@dympl.com>

## LICENSE

The MIT License (MIT)

Copyright (c) 2014 David Wisner

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

