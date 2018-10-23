const mongoose = require('mongoose');

const ObjectID = mongoose.Schema.Types.ObjectId;

module.exports = new mongoose.Schema({
	rating : {
		type: String
	},
	reviewTitle : {
		type: String
	},
	reviewDescription : {
		type: String
	},
	visitSort : {
		type: String
	},
	overallRating : {
		type: String
	},
	reviewedDate : {
		type: Date,
		default: Date.now
	}

});