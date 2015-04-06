import Ember from 'ember';

export default Ember.Object.extend({

	// thing kind logic
	isT1: Ember.computed('kind', function() {
		return this.get('kind') === 't1';
	}),

	isT2: Ember.computed('kind', function() {
		return this.get('kind') === 't2';
	}),

	isT3: Ember.computed('kind', function() {
		return this.get('kind') === 't3';
	}),

	isT4: Ember.computed('kind', function() {
		return this.get('kind') === 't4';
	}),

	isT5: Ember.computed('kind', function() {
		return this.get('kind') === 't5';
	}),

	// thing kind component enum for Ember 1.11 component helper
	thingComponent: Ember.computed('kind', function() {
		switch (this.get('kind'))
		{
			case 't1': return 't1-row';
			case 't3': return 't3-row';
			case 't2':
			case 't4':
			case 't5': return 'no-op';
			default: return 'no-op';
		}
	})
});
