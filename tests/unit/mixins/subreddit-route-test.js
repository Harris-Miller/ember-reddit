import Ember from 'ember';
import {module, test} from 'qunit';
import SubredditRouteMixin from 'ember-reddit/mixins/subreddit-route';

module('SubredditRouteMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var SubredditRouteObject = Ember.Object.extend(SubredditRouteMixin);
  var subject = SubredditRouteObject.create();
  assert.ok(subject);
});
