import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['midcol'],
	classNameBindings: ['upvoted:likes', 'downvoted:dislikes', 'unvoted'],

	showScore: true,

	displayScore: Ember.computed('score', 'likes', function() {
		if (this.get('likes') === true) {
			return this.get('score') + 1;
		}
		else if (this.get('likes') === false) {
			return this.get('score') - 1;
		}
		else {
			return this.get('score');
		}
	}),

	unvoted: Ember.computed('likes', function() {
		return this.get('likes') === null;
	}),

	upvoted: Ember.computed('likes', function() {
		return this.get('likes') === true;
	}),

	downvoted: Ember.computed('likes', function() {
		return this.get('likes') === false;
	}),

	actions: {
		// TODO, apply ajax call to api/vote for these once login functionality is completed
		upvote: function() {
			// if already liked, set to null (unvoted)
			if (this.get('likes') === true) {
				this.set('likes', null);
			}
			else {
				this.set('likes', true);
			}
		},
		downvote: function() {
			// if already disliked, set to null (unvoted)
			if (this.get('likes') === false) {
				this.set('likes', null);
			}
			else {
				this.set('likes', false);
			}
		}
	}
});
