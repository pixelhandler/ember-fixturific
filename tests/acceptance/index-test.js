import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'http-mocks-with-fixtures/tests/helpers/start-app';
import jsonMock from 'fixtures/api/colors';

var application, colors, sandbox;

module('Acceptance: Index', {
  beforeEach: function() {
    sandbox = sinon.sandbox.create();
    sandbox.useFakeServer();
    sandbox.server.autoRespond = true;
    sandbox.server.respondWith(
      'GET',
      '/api/colors',
      [200, { "Content-Type": "application/json" }, JSON.stringify(jsonMock)]
    );

    application = startApp();
    colors = jsonMock.colors;
  },

  afterEach: function() {
    sandbox.restore();
    Ember.run(application, 'destroy');
  }
});

test('visiting /index', function(assert) {
  assert.expect(3);
  visit('/');

  andThen(function() {
    colors.forEach(function(color, idx) {
      var listedName = find('li:eq('+ idx +')').text().trim();
      var expectedName = colors[idx].name;
      assert.equal(listedName, expectedName, 'color name: '+ expectedName +' listed');
    });
  });
});
