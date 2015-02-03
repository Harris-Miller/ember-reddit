import Ember from 'ember';

export default Ember.Object.extend({

	hasAfter: Ember.computed('after', function() {
		return !!this.get('after');
	}),

	hasBefore: Ember.computed('before', function() {
		return !!this.get('before');
	})
});
