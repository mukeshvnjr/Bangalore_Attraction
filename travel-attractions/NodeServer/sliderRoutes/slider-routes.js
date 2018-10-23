const router = require('express').Router();


const Slider = require('./slider-model');


router.route('/mainSlider').post((req, res) =>{

    const sliderTitle = req.body.sliderTitle;
    const sliderImgUrl = req.body.sliderImgUrl;
    const shortDescription = "Beach view";

    if(res == null){
        res.json({
            success: false,
            message: "something wrong",
        })
    } else {

    Slider.create({sliderTitle : sliderTitle,sliderImgUrl : sliderImgUrl,shortDescription : shortDescription}, function(err,resp){

            if(err){
                console.log("err executed " + err);
                res.json({
                    success: false,
                    message: "something went wrong",
                })
            } else {
                console.log("sliderImg added" + resp);
                res.json({
                    success: true,
                    message: "slider added",
                    result: resp
                })

            }

         });
    }
});


router.route('/getSlider').get((req,res) => {

    Slider.find({}, function(err,respon){

        if(err){
            console.log("user not found");
            res.json({
                success: false,
                message: "Error"
                // result: error
            });
        } else {
    
            console.log("user found");
            res.json({
                success: true,
                message: "Found",
                result: respon
            });
    
        }
    });

});









module.exports = router;