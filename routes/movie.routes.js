const express = require('express');
const router = express.Router();
const movieController = require('../controllers/Movie.controller');

router.get('/get', movieController.getMovies);
router.post('/post', movieController.createMovie);
router.put('/put/:id', movieController.updateMovie);
router.delete('/delete/:id', movieController.deleteMovie);

module.exports = router;
