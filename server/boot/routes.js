// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

var dsConfig = require('../datasources.json');
var fs = require('fs');
var path = require('path');

module.exports = function(app) {
  var User = app.models.user;
  var Resume = app.models.Resume;
};
