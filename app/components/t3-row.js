import Ember from 'ember';
import thingMixin from '../mixins/thing-component';
import decodeHtml from '../utils/decode-html';

export default Ember.Component.extend(thingMixin, {
	classNames: ['t3', 'link'],
	classNameBindings: ['hasLinkFlair:linkflair'],

	hasSelfText: Ember.computed('model.selftext_html', function() {
		return !!this.get('model.selftext_html');
	}),

	renderedSelfText: Ember.computed('model.selftext_html', function() {
		return decodeHtml(this.get('model.selftext_html'));
	}),

	hasMediaEmbed: Ember.computed('model.media_embed', function() {
		return !!this.get('model.media_embed').content;
	}),

	renderedMediaEmbed: Ember.computed('model.media_embed', function() {
		return decodeHtml(this.get('model.media_embed').content);
	}),

	isExpandoExpanded: false,

	hasLinkFlair: Ember.computed('model.link_flair_text', function() {
		return !!this.get('model.link_flair_text');
	}),

	forComment: false,

	actions: {
		expandExpando: function() {
			this.toggleProperty('isExpandoExpanded');
		}
	}
});
