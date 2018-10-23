const mongoose = require('mongoose');

const ContactUs = mongoose.model('ContactUs' , require('./contact-schema'));

module.exports = ContactUs;