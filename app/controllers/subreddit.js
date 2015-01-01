import Ember from 'ember';

export default Ember.ObjectController.extend({
	queryParams: ['t', 'count', 'after', 'before'],
	t: null,
	count: null,
	after: null,
	before: null,

	currentSub: null,

	isFrontpage: false,

	hasAfter: Ember.computed('model.after', function() {
		return !!this.get('model.after');
	}),

	hasBefore: Ember.computed('model.before', function() {
		return !!this.get('model.before');
	}),

	nextCount: Ember.computed('count', function() {
		if (!!this.get('count')) {
			return this.get('count') * 2;
		}

		return 25;
	}),

	prevCount: Ember.computed('count', function() {
		if (!!this.get('count')) {
			return parseInt(this.get('count'), 10) + 1;
		}

		return 0;
	})
});