/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var compileES6 = require('broccoli-es6-concatenator');
var jsonToModule = require('./json-to-module');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

var buildTrees = [];

if (process.env.EMBER_ENV === 'test') {

  var sinon = pickFiles('bower_components/sinon', {
    srcDir: '/',
    files: ['index.js'],
    destDir: '/assets/sinon'
  });

  buildTrees.push(sinon);

  var mocks = pickFiles('fixtures', {
    srcDir: '/',
    files: ['**/*.json'],
    destDir: '/fixtures'
  });

  var mocksJs = compileES6(jsonToModule(mocks), {
    inputFiles: [
      '**/*.js'
    ],
    wrapInEval: false,
    outputFile: '/assets/test-data-mocks.js'
  });

  buildTrees.push(mocksJs);
}

module.exports = app.toTree(buildTrees);
