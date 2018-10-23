const mongoose = require('mongoose');

const Attraction = mongoose.model('Attraction', require('./attraction-schema'));

module.exports = Attraction; 
