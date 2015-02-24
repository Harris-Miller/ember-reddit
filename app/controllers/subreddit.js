import Ember from 'ember';
import PagableMixin from '../mixins/pagable-controller';

export default Ember.Controller.extend(PagableMixin, {
	
	currentSub: null,

	isFrontpage: false,

	hasHeaderImg: Ember.computed.bool('model.about.data.header_img'),

	headerImg: Ember.computed.alias('model.about.data.header_img'),

	headerCoords: Ember.computed('model.about.data.header_size', function() {
		return {
			height: this.get('model.about.data.header_size')[1],
			width: this.get('model.about.data.header_size')[0]
		};
	})
});