import Ember from 'ember';

export default Ember.Route.extend({

	viewName: 'semantic/div-content',

	model: function(params) {
		params.subreddit = this.paramsFor('subreddit').subreddit;

		return Ember.RSVP.hash({
			listings: this.store.find('comments', Ember.copy(params)),
			about: this.store.find('about', Ember.copy(params))
		});
	},

	setupController: function(controller, model) {
		this._super(controller, model);

		controller.set('currentSub', this.paramsFor('subreddit').subreddit);
	},

	renderTemplate: function(controller, model) {
		this._super();

		this.render('tabmenu/comments', {
			into: 'application',
			outlet: 'tabmenu',
			controller: controller,
			model: model
		});

		this.render('sidepanel', {
			into: 'application',
			outlet: 'sidepanel',
			controller: 'sidepanel',
			model: model.about
		});
	}
});
