const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

module.exports = new mongoose.Schema({
    sliderTitle : {
    	type: String
    },
    sliderImgUrl: { 
       type: String 
    },
    shortDescription : {
    	type: String
    },
    sliderId : {
		type : ObjectID
	}
});