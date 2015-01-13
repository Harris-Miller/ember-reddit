import Ember from 'ember';
import decodeHtml from '../utils/decode-html';

export default Ember.View.extend({
	templateName: 't3row',
	classNames: ['t3', 'link'],
	classNameBindings: ['hasLinkFlair:linkflair'],

	hasSelfText: Ember.computed('context.selftext_html', function() {
		return !!this.get('context.selftext_html');
	}),

	renderedSelfText: Ember.computed('context.selftext_html', function() {
		return decodeHtml(this.get('context.selftext_html'));
	}),

	hasMediaEmbed: Ember.computed('context.media_embed', function() {
		return !!this.get('context.media_embed').content;
	}),

	renderedMediaEmbed: Ember.computed('context.media_embed', function() {
		return decodeHtml(this.get('context.media_embed').content);
	}),

	isExpandoExpanded: false,

	hasLinkFlair: Ember.computed('context.link_flair_text', function() {
		return !!this.get('context.link_flair_text');
	}),

	forComment: false,

	actions: {
		expandExpando: function() {
			this.toggleProperty('isExpandoExpanded');
		}
	}
});
