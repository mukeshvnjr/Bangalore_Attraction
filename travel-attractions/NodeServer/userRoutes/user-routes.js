const router = require('express').Router();

const bcrypt = require('bcrypt');

const User = require('./user-model'); 
// var key = 12; 

 router.route('/registerUser').post((req, res) => {

	const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const address1 = req.body.address1;
    const street = req.body.street;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const zipCode = req.body.zipCode;
    const homeLatitude = req.body.homeLatitude;
    const homeLongitude = req.body.homeLongitude;
    const status = req.body.status;
    const mailingPreference = req.body.mailingPreference;

    // password hashing done here;
    bcrypt.hash(password, 12, function(err, hash){
        if(err){
               console.log("err" + err);
               res.json({
                success: false,
                message: 'Something Went Wrong!',
                error: err
            });
        } else { 
           var passwordHash = hash;
            console.log("passwordhash" + passwordHash);

            User.find({
                email: email
            }, function (err, response) {

                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        message: 'Something Went Wrong!',
                        error: err
                    });
                }

                if (response.length > 0) {
                    console.log("email Id exists");
                    res.json({
                        success: false,
                        message: 'Email Id is already registered',
                        error: err
                    });
                } else {
                    console.log("email ID doesn't exist");

                    var userObj = {

                        firstName : firstName,
                        lastName : lastName,
                        email : email,
                        password: passwordHash,
                        mobile : mobile,
                        address : address,
                        address1 : address1,
                        street : street,
                        city : city,
                        state : state,country : country,zipCode : zipCode,
                        homeLatitude : homeLatitude,homeLongitude : homeLongitude,
                        status : status,mailingPreference : mailingPreference
                    }

                    User.create(userObj, (err, user) => {
                        if (err) {
                            res.json({
                                success: false,
                                message: 'Email Id is already registered',
                                error: err
                            });
                        }

                        res.json({
                            success: true,
                            message: "User Registered Successfully",
                            result: user
                        });

                    });
                }

            });
    
        }
   });

});

router.route('/loginUser').post((req, res) => {

    var emailId = req.body.email;
    var password = req.body.password;
    // var userId = req.query.userId;

    // console.log("emailId" +    emailId);
    // console.log("password" +    password);
    // console.log("id" + userId);

    User.find({email : emailId}, function(err, userRes){
          if(err){
            res.json({
                success: false,
                message: 'Email doesn\'t exist',
                error: err
            });
        }
            console.log(userRes);
            
            // console.log("user " + userRes[0]._id);
            //  console.log("user " + userRes[0].email);
            // console.log("pass " + userRes[0].password);


            if(userRes != ""){

                if(userRes[0].email === emailId) {

                    bcrypt.compare(password, userRes[0].password, function(err, resp) {
                        if(resp) {
                         console.log("password match");
                         var myDate = new Date();
                        
                        User.findOneAndUpdate({"email" : emailId},{$set: {"lastLogin" : myDate}}, function(err, updateRes){
                            // console.log("err" + updateRes);
                            if(updateRes){
                                console.log("Date has been updated");
                               
                            } else {
                                console.log("Date not updated");
                            }
                        });
                        res.json({
                            success: true,
                            message: "Login success",
                            result: userRes
                        });
                    } else {
                         
                         console.log("password is wrong");
                         res.json({
                            success: false,
                            message: "password is wrong",
                            // error: err
    
                        });
                        } 
                 });   
            }
                else {
                    res.json({
                        success: false,
                        message: "email not registered",
                        // error: err

                    });
                } 
        } else {
            res.json({
                success: false,
                message: "email not exist",
                // error: err

            });
            
        }

    });

});


router.route('/getAllUserData').get((req,res) => {

//  name = req.body.email;

User.find({}, function(err,respon){

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