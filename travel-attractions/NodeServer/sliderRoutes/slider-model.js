const mongoose = require('mongoose');

const SliderImage = mongoose.model('SliderImage', require('./slider-schema'));

module.exports = SliderImage; 