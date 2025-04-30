const Actor = require('../models/Actor');

exports.getActors = async ({ page = 1, limit = 10 }) => {
  const skip = (page - 1) * limit;
  return await Actor.find({ active: true })
  // .skip(skip).limit(parseInt(limit));
};

exports.createActor = async (data) => {
  const actor = new Actor(data);
  return await actor.save();
};

exports.updateActor = async (id, data) => {
  return await Actor.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteActor = async (id) => {
  return await Actor.findByIdAndUpdate(id, { active: false }, { new: true });
};
