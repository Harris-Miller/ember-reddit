import Ember from 'ember';

export default Ember.Route.extend({

	viewName: 'semantic/div-content',
	
	model: function(params) {
		return Ember.RSVP.hash({
			listing: this.store.find('user', params.user)
		});
	}
});
