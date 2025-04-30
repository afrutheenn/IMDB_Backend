const express = require('express');
const router = express.Router();
const producerController = require('../controllers/producer.controller');

router.get('/get', producerController.getProducers);
router.post('/post', producerController.createProducer);
router.put('/put/:id', producerController.updateProducer);
router.delete('/delete/:id', producerController.deleteProducer);

module.exports = router;
