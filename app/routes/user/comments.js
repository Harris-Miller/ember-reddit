import Ember from 'ember';
import UserRouteRouteMixin from '../../mixins/user-route';

export default Ember.Route.extend(UserRouteRouteMixin, {

	model: function(params) {

		params.filter = 'comments';

		return this._super(params);
	}
});
