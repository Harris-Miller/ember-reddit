import Ember from 'ember';

export default Ember.Controller.extend({

	about: Ember.computed.alias('model.about'),

	hasAbout: Ember.computed.bool('about.data')
});
