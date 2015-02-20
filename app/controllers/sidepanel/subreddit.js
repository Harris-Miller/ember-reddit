import Ember from 'ember';
import decodeHtml from '../../utils/decode-html';

export default Ember.Controller.extend({

	about: Ember.computed.alias('model.about'),

	moderators: Ember.computed.alias('model.moderators'),

	hasAbout: Ember.computed.bool('about.data'),

	hasModerators: Ember.computed.notEmpty('moderators'),

	renderedDescription: Ember.computed('about.data.description_html', function() {
		return decodeHtml(this.get('about.data.description_html'));
	}),

	subscribersString: Ember.computed('about.data.subscribers', function() {
		var subscribers = this.get('about.data.subscribers');

		if (Ember.typeOf(subscribers) === 'number') {
			return subscribers.toLocaleString();
		}

		return '';
	}),

	activeAccountsString: Ember.computed('about.data.accounts_active', function() {
		var accounts = this.get('about.data.accounts_active');

		if (Ember.typeOf(accounts) === 'number') {
			return accounts.toLocaleString();
		}

		return '';
	})
});
