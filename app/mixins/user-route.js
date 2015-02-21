import Ember from 'ember';

export default Ember.Mixin.create({

	controllerName: 'user',
	templateName: 'user/index',
	viewName: 'semantic/div-content',
	
	model: function(params) {
		params.user = params.user || this.paramsFor('user').user;

		return Ember.RSVP.hash({
			listing: this.store.find('user', params),
			about: this.store.find('user-about', params.user)
		});
	},

	setupController: function(controller, model) {
		var isBefore = !!this.controller.get('before');
		var count = parseInt(this.controller.get('count'), 10) || 1;

		// adjust account for when isBefore
		if (isBefore && count !== 1) {
			count = count - 25;
		}

		for (var i = 0; i < model.listing.get('children').length; i++) {
			model.listing.get('children')[i].data.index = count + i;
		}
		
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
