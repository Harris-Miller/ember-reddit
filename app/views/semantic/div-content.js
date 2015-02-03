import Ember from 'ember';

export default Ember.View.extend({
	classNames: ['content'],
	attributeBindings: ['role'],

	role: 'main'
});
