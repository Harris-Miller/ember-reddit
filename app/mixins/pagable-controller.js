import Ember from 'ember';

export default Ember.Mixin.create({
	queryParams: ['t', 'count', 'after', 'before'],
	t: null,
	count: null,
	after: null,
	before: null,

	isSortable: false,

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
