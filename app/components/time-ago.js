import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'time',
	attributeBindings: ['utc:title', 'iso8601:datetime'],

	dateMoment: Ember.computed('datetime', function() {
		return moment.unix(this.get('datetime')).utc();
	}),

	iso8601: Ember.computed('dateMoment', function() {
		return this.get('dateMoment').format();
	}),

	utc: Ember.computed('dateMoment', function() {
		return this.get('dateMoment').format('ddd MMM D HH:mm:ss YYYY z');
	}),

	ago: Ember.computed('dateMoment', function() {
		return this.get('dateMoment').fromNow();
	}),

	from: Ember.computed('dateMoment', function() {
		return this.get('dateMoment').fromNow(true);
	}),

	noSuffix: false
});
