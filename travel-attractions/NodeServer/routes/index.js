const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});


    router.use('/user', require('../userRoutes/user-routes'));
    // router.use('/contact', require('../contactRoutes/contact-routes'));
    router.use('/attraction', require('../attractionRoutes/attraction-routes'));
   router.use('/slider', require('../sliderRoutes/slider-routes'));
   // router.use('/review', require('../reviewRoutes/review-routes'));


   
module.exports = router;