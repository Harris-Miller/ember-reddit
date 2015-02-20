import Ember from 'ember';

export default Ember.Mixin.create({

	viewName: 'semantic/div-content',
	
	model: function(params) {
		params.user = params.user || this.paramsFor('user').user;

		return Ember.RSVP.hash({
			listing: this.store.find('user', params.user),
			about: this.store.find('user-about', params.user)
		});
	},

	setupController: function(controller, model) {
		this._super(controller, model);

		controller.set('user', this.paramsFor('user').user);
	},

	renderTemplate: function(controller, model) {
		this._super(controller, model);

		this.render('tabmenu/user', {
			into: 'application',
			outlet: 'tabmenu',
			controller: 'user'
		});

		this.render('sidepanel/user', {
			into: 'application',
			outlet: 'sidepanel',
			controller: 'sidepanel/user',
			view: 'sidepanel',
			model: { about: model.about }
		});
	}
});
