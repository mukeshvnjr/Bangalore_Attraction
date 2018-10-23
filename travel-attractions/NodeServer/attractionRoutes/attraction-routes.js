const router = require('express').Router();

const multer  = require('multer');
const fs = require('fs');

const TopAttraction = require('./attraction-model');

// upload = multer({limits: {fileSize: 5000000 },dest:'/uploads/'})
//upload.single('picture'),

  router.route('/imageUpload').post((req, res) => {

    if(req.file == null){
        res.json({
            success: false,
            message: "Please select an image",
        })

    } else {
        var ImagePath = fs.readFileSync(req.file.path);

        var encImg = ImagePath.toString('base64');
        
        var newItem = {
            description: req.body.description,
            contentType: req.file.mimetype,
            size: req.file.size,
            data: Buffer(encImg, 'base64')   
         };
        //  console.log(newItem);
         

        const title = "Manglore";
        const imgNumber = "5"
        const placeName = "Penambur Beach";
        const placeAddress = "Manglore Karanataka";
        const description = "A good place to spend time";
        const openHours = "6AM to 6PM";
        const suggestedHours = "3 to 4 hours"
        const latitude = "1.245";
        const longitude = "2.5524";
        const websiteLink = "www.sample.com"

     
    TopAttraction.create({title : title,img : newItem,imgNumber : imgNumber,placeName : placeName,placeAddress: placeAddress,
        description : description,openHours : openHours,suggestedHours : suggestedHours,
        latitude : latitude,longitude : longitude,websiteLink : websiteLink}, function(err,resp){
    
            if(err){
                console.log("err executed " + err);
                res.json({
                    success: false,
                    message: "Failed",
                })
            } else {    
                console.log("TopAttraction added");
                res.json({
                    success: true,
                    message: "Attraction added",
                    // result: resp
                })
            }
        });
        // console.log("img added to db");
        // res.json({
        //     success: true,
        //     message: "Image added to DB",
        // })
    }
    
  })


module.exports = router;