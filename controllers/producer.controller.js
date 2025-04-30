const asyncHandler = require('../utils/asyncHandler');
const producerService = require('../services/producer.service');

exports.getProducers = asyncHandler(async (req, res) => {
  const producers = await producerService.getAllProducers({
    page: req.query.page,
    limit: req.query.limit
  });
  res.status(200).json({ success: true, count: producers.length, data: producers });
});

exports.createProducer = asyncHandler(async (req, res) => {
  const producer = await producerService.createProducer(req.body);
  res.status(201).json({ success: true, data: producer });
});

exports.updateProducer = asyncHandler(async (req, res) => {
  const producer = await producerService.updateProducer(req.params.id, req.body);
  if (!producer) {
    return res.status(404).json({ success: false, message: "Producer not found" });
  }
  res.status(200).json({ success: true, data: producer });
});

exports.deleteProducer = asyncHandler(async (req, res) => {
  const producer = await producerService.updateProducer(req.params.id, { active: false });
  if (!producer) {
    return res.status(404).json({ success: false, message: "Producer not found" });
  }
  res.status(200).json({ success: true, message: "Producer deactivated", data: producer });
});
