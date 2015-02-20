import Ember from 'ember';
import ajax from 'ic-ajax';
import parseListing from '../utils/parse-listing';

export default Ember.Object.extend({
	find: function(name, id) {
		
		return ajax(`https://www.reddit.com/user/${id}.json`).then(function(result) {
			return parseListing(result);
		});
	}
});
