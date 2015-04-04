# ember-fixturific

An example project: Http-mocks-with-fixtures that uses .json files that are shared between http-mocks server and acceptance tests.

Running the project with `npm run start-mock` will use the the http-mocks server, using `ember server` will not. See the [config/environment.js] file and [server/index.js] files that use an environment variable `process.env.USE_HTTP_MOCKS`.

The setup for sharing the JSON is done like with:

* [fixtures] directory for the raw .json files
* [server] directory has an example endpoint mocked for /api/colors
* [Brocfile.js] build which converts the .json files in the [fixtures] directory into ES6 modules for use in yours tests. 
* [json-to-module.js] file which is used by the build to convert the fixtures.
* [bower.js] uses a git url for the sinon dependency, needed to use `bower install` after adding the git url

Some commands use to setup this example project:

		ember g route index
		ember g model color
		ember g adapter application

		npm install broccoli-static-compiler --save-dev
		npm install broccoli-es6-concatenator --save-dev

		bower install

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

