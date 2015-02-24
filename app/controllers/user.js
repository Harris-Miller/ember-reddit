import Ember from 'ember';
import PagableMixin from '../mixins/pagable-controller';

export default Ember.Controller.extend(PagableMixin, {

	needs: ['application'],

	user: null,

	currentRoute: Ember.computed.alias('controllers.application.currentRouteName')
});
