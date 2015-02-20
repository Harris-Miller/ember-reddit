import Ember from 'ember';
import ThingComponentMixin from '../../../mixins/thing-component';
import { module, test } from 'qunit';

module('ThingComponentMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var ThingComponentObject = Ember.Object.extend(ThingComponentMixin);
  var subject = ThingComponentObject.create();
  assert.ok(subject);
});
