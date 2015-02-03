import Ember from 'ember';
import Thing from '../models/thing';
import Listing from '../models/listing';

var parseListing = function(listing) {
	
	return Listing.create({
		modhash: listing.data.modhash,
		children: listing.data.children.map(function (child) {
			if (!!child.data) {
				if (!!child.data.replies && !!child.data.replies.data) {
					child.data.replies = parseListing(child.data.replies);
				}
			}

			return Thing.create(child);
		}),
		after: listing.data.after,
		before: listing.data.before
	});
};

export default parseListing;