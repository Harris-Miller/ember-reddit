import Ember from 'ember';
import ajax from 'ic-ajax';
import parseUserList from '../utils/parse-user-list';

export default Ember.Object.extend({
	find: function(name, params) {

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
				url: url + '/about/moderators.json'
			}).then(function(result) {
				return parseUserList(result);
			});
		}

		// else, just return an empty array
		return Ember.RSVP.resolve([]);
	}
});
