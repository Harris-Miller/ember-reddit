import Ember from 'ember';
import ajax from 'ic-ajax';
import parseListing from '../utils/parse-listing';

export default Ember.Object.extend({
	find: function(name, params) {

		var url = 'https://www.reddit.com//subreddits/mine/subscriber.json';

		return ajax({
			url: url
		}).then(function(result) {
			return parseListing(result);
		}, function() {
			return Ember.RSVP.resolve(Ember.Object.create()); // resolve with and empty object
		})
	}
});
