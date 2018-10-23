const mongoose = require('mongoose');
// var userSchema = mongoose.Schema;
const ObjectID = mongoose.Schema.Types.ObjectId;

module.exports = new mongoose.Schema({
    name : {
    	type: String
    },
    emailId : {
    	type: String,
    	required: true
    },
    mobile : {
    	type: String
    },
    message : {
    	type: String
    },
    contactId : {
		type : ObjectID
	},
	creation : {
        type : Date, 
        default: Date.now 
    }
});