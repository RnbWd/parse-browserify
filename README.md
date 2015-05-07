parse-browserify
================

**THIS IS NOT MAINTAINED**

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

**MIT**
