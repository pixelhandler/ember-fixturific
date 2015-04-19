/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var compileES6 = require('broccoli-es6-concatenator');
var jsonToModule = require('./json-to-module');

var app = new EmberApp();

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
