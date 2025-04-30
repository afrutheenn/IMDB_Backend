const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actor.controller');

router.get('/get', actorController.getActors);            
router.post('/post', actorController.createActor);          
router.put('/put/:id', actorController.updateActor);        
router.delete('/:id', actorController.deleteActor);

module.exports = router;
