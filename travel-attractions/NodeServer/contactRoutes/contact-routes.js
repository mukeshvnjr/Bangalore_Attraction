const router = require('express').Router();

const Contact = require('./contact-model');



const name = "kumar";
const emailId = "shashi@gkd.com"
const mobile = "884352122";
const message = "Avohi infotech";



Contact.create({name : name,emailId : emailId,mobile : mobile,message : message}, function(err,resp){

        if(err){
            console.log("err executed " + err);
        }

            console.log("contact added" + resp);
    });





module.exports = router;