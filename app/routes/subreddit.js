import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('subreddit', params.subreddit_id);
	}
});
