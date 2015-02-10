import Ember from 'ember';
import calcChildren from '../utils/calc-children';
import decodeHtml from '../utils/decode-html';

export default Ember.Component.extend({
	classNames: ['t1', 'comment'],
	classNameBindings: ['isCollapsed:collapsed:noncollapsed'],

	isCollapsed: false,

	renderedBody: Ember.computed('model.body_html', function() {
		return decodeHtml(this.get('model.body_html'));
	}),

	actions: {
		toggleCollapse: function() {
			this.toggleProperty('isCollapsed');
		}
	},

	hasChildren: Ember.computed('model.replies', function() {
		return !!this.get('model.replies.children') && this.get('model.replies.children').length;
	}),

	children: Ember.computed('model.replies', function() {
		return this.get('model.replies.children');
	}),

	numChildren: Ember.computed('model.replies', function() {
		return calcChildren(this.get('model.replies'));
	}),

	plurarizeChild: Ember.computed('numChildren', function() {
		return this.get('numChildren') === 1 ? 'child' : 'children';
	}),

	plurarizePoint: Ember.computed('model.score', function() {
		return this.get('model.score') === 1 ? 'point' : 'points';
	})
});
