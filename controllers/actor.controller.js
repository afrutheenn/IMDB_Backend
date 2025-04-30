const asyncHandler = require('../utils/asyncHandler');
const actorService = require('../services/actor.service');

exports.getActors = asyncHandler(async (req, res) => {
  const actors = await actorService.getActors({
    page: req.query.page,
    limit: req.query.limit
  });
  res.status(200).json({ success: true, count: actors.length, data: actors });
});

exports.createActor = asyncHandler(async (req, res) => {
  const actor = await actorService.createActor(req.body);
  res.status(201).json({ success: true, data: actor });
});

exports.updateActor = asyncHandler(async (req, res) => {
  const actor = await actorService.updateActor(req.params.id, req.body);
  if (!actor) {
    return res.status(404).json({ success: false, message: "Actor not found" });
  }
  res.status(200).json({ success: true, data: actor });
});

exports.deleteActor = asyncHandler(async (req, res) => {
  const actor = await actorService.deleteActor(req.params.id);
  if (!actor) {
    return res.status(404).json({ success: false, message: "Actor not found" });
  }
  res.status(200).json({ success: true, data: {} });
});
