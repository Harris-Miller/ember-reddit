import Ember from 'ember';
import ajax from 'ic-ajax';
import thing from '../models/thing';

export default Ember.Object.extend({
	find: function(name, params) {

		//params = $.extend({}, params);
		var isFrontpage = false;

		// build the url
		var url = 'https://www.reddit.com/';

		// add subreddit
		if (params.subreddit) {
			url += 'r/' + params.subreddit;
		}
		else {
			isFrontpage = true;
		}

		// if we're not on the frontpage
		if (!isFrontpage) {
			return ajax({
				url: url + '/about.json'
			}).then(function(result) {
				return thing.create(result);
			});
		}

		// else, just return an instance of thing with an empty object to it's constructor
		return Ember.RSVP.resolve(thing.create({}));
	}
});
