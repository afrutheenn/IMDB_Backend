const express = require('express');
const router = express.Router();

const movieRoutes = require('./movie.routes');
const actorRoutes = require('./actor.routes');
const producerRoutes = require('./producer.routes');
const authRoutes = require('./auth.routes');

router.use('/movies', movieRoutes);
router.use('/actors', actorRoutes);
router.use('/producers', producerRoutes);
router.use('/auth', authRoutes);

module.exports = router;