// Defines Routes
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const trailRoutes = require('./trail-routes.js');
const animalRoutes = require('./animal-routes.js');
const cardRoutes = require('./card-routes.js');


router.use('/user', userRoutes);
router.use('/trail', trailRoutes);
router.use('/animal', animalRoutes);
router.use('/trail/cards', cardRoutes);

module.exports = router;