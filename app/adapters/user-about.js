import Ember from 'ember';
import ajax from 'ic-ajax';
import thing from '../models/thing';

export default Ember.Object.extend({
	find: function(name, id) {

		return ajax(`https://www.reddit.com/user/${id}/about.json`).then(function(result) {
			return thing.create(result);
		});
	}
});
