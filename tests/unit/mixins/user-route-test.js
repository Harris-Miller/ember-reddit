import Ember from 'ember';
import UserRouteMixin from '../../../mixins/user-route';
import { module, test } from 'qunit';

module('UserRouteMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var UserRouteObject = Ember.Object.extend(UserRouteMixin);
  var subject = UserRouteObject.create();
  assert.ok(subject);
});
