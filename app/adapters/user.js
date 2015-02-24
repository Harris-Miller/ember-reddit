import Ember from 'ember';
import ajax from 'ic-ajax';
import parseListing from '../utils/parse-listing';

export default Ember.Object.extend({
	find: function(name, params) {
		
		// build the url
		var url = 'https://www.reddit.com/';

		// add user
		url += 'user/' + params.user;
		delete params.user;

		if (params.filter) {
			url += '/' + params.filter;
			delete params.filter;
		}

		return ajax({
			url: url + '.json',
			data: params
		}).then(function(result) {
			return parseListing(result);
		});
	}
});
