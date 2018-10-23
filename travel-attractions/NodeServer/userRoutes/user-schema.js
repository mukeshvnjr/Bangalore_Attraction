const mongoose = require('mongoose');
// var userSchema = mongoose.Schema;
const ObjectID = mongoose.Schema.Types.ObjectId;

module.exports = new mongoose.Schema({
	firstName : {
		type: String
	},
	lastName : {
		type: String
	},
	email : {
		type: String
	},
	password : {
		type: String
	},
	mobile : {
		type: String
	},
	address: {
		type: String
	},
	address1: {
		type: String
	},
	street : {
		type: String
	},
	city : {
		type: String
	},
	state : {
		type: String
	},
	country : {
		type: String
	},
	zipCode : {
		type: String
	},
	userId : {
		type : ObjectID
	},
	homeLatitude : {
        type : String
    },
    homeLongitude : {
        type: String
    },
    status : {
    	type: String
    },
    lastLogin : {
    	type : Date, 
        default: Date.now
    },
    mailingPreference : {
    	type: String
    },
    creation : {
        type : Date, 
        default: Date.now 
    }


});