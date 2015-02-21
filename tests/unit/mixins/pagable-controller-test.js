import Ember from 'ember';
import PagableControllerMixin from '../../../mixins/pagable-controller';
import { module, test } from 'qunit';

module('PagableControllerMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var PagableControllerObject = Ember.Object.extend(PagableControllerMixin);
  var subject = PagableControllerObject.create();
  assert.ok(subject);
});
