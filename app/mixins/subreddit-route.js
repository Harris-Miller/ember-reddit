import Ember from 'ember';

export default Ember.Mixin.create({
	queryParams: {
		t: { refreshModel: true },
		count: { refreshModel: true },
		after: { refreshModel: true },
		before: { refreshModel: true }
	},

	controllerName: 'subreddit',
	templateName: 'subreddit/index',
	viewName: 'semantic/div-content',

	model: function(params) {
		params.subreddit = params.subreddit || this.paramsFor('subreddit').subreddit;

		return Ember.RSVP.hash({
			listing: this.store.find('subreddit', Ember.copy(params)),
			about: this.store.find('about', Ember.copy(params)),
			moderators: this.store.find('moderators', Ember.copy(params))
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

		controller.set('isFrontpage', false);

		controller.set('currentSub', this.paramsFor('subreddit').subreddit);
	},

	renderTemplate: function(controller, model) {
		this._super();

		this.render('tabmenu/subreddit', {
			into: 'application',
			outlet: 'tabmenu',
			controller: 'subreddit'
		});

		this.render('sidepanel/subreddit', {
			into: 'application',
			outlet: 'sidepanel',
			controller: 'sidepanel/subreddit',
			view: 'sidepanel',
			model: { about: model.about, moderators: model.moderators }
		});
	}
});
