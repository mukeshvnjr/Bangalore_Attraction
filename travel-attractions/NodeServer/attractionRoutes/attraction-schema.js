const mongoose = require('mongoose');

const ObjectID = mongoose.Schema.Types.ObjectId;

module.exports = new mongoose.Schema({
	title : {
		type: String
	},
	img: { 
		data: Buffer, 
		contentType: String 
	},
	imgNumber : {
		type: Number
	},
	imgId : {
		type : ObjectID
	},
	placeName : {
		type: String
	},
	placeAddress : {
		type: String
	},
	description : {
		type: String
	},
	openHours : {
		type: String
	},
	suggestedHours : {
		type: String
	},
	latitude : {
		type: String
	},
	longitude : {
		type: String
	},
	websiteLink : {
		type: String
	}

});