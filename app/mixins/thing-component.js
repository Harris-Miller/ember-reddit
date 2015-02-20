import Ember from 'ember';

export default Ember.Mixin.create({

	// assume that we are to show p.parent if data.link_author exists
	showParent: Ember.computed.bool('model.link_author')
});
