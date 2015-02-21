import Ember from 'ember';
import PagableMixin from '../mixins/pagable-controller';

export default Ember.Controller.extend(PagableMixin, {
	
	currentSub: null,

	isFrontpage: false
});