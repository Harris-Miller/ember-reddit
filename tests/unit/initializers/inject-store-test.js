import Ember from 'ember';
import {module, test} from 'qunit';
import { initialize } from 'ember-reddit/initializers/inject-store';

var container, application;

module('InjectStoreInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      container = new Ember.Container();
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

