const mongoose = require('mongoose');

const Review = mongoose.model('Review', require('./review-schema'));

module.exports = Review; 