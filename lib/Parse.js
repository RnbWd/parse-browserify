/*!
 * Parse JavaScript SDK
 * Version: 1.2.18*
 * Built for AMD
 * http://parse.com
 *
 * Copyright 2014 Parse, Inc.
 * The Parse JavaScript SDK is freely distributable under the MIT license.
 *
 * Includes: Underscore.js
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud Inc.
 * Released under the MIT license.
 */

///Declare Parse
  this.Parse = this.Parse || {};
  var Parse = this.Parse;
  var _ = require('underscore');

  Parse.VERSION = "js1.2.18";
  Parse._ = _.noConflict();
  
  if (typeof(localStorage) !== "undefined") {
    Parse.localStorage = localStorage;
  }
  if (typeof(XMLHttpRequest) !== "undefined") {
    Parse.XMLHttpRequest = XMLHttpRequest;
  }
  
  // If jQuery or Zepto has been included, grab a reference to it.
  if (typeof($) !== "undefined") {
    Parse.$ = $;
  }

  exports.Parse = Parse;

//require library
require('./coreAPI');
require('./analytics');
require('./error');
require('./events');
require('./geopoint');
require('./acl');
require('./op');
require('./relation');
require('./promise');
require('./file');
require('./object');
require('./role');
require('./collection');
require('./view');
require('./user');
require('./query');
require('./facebook');
require('./history');
require('./router');
require('./cloud');
require('./push');