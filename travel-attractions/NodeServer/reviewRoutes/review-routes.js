const router = require('express').Router();

const Review = require('./review-model');



const rating = "4.6";
const reviewTitle = "Awesome!!"
const reviewDescription = "nice view point from this placce";
const visitSort = "Family";
const overallRating = "4.1";



Review.create({rating : rating,reviewTitle : reviewTitle,reviewDescription : reviewDescription,visitSort : visitSort,
	overallRating : overallRating}, function(err,resp){

        if(err){
            console.log("err executed " + err);
        }

            console.log("review added" + resp);
    });





module.exports = router;