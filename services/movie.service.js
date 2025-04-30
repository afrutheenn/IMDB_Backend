const Movie = require('../models/Movie');

exports.getAllMovies = async ({ page = 1, limit = 10 }) => {
  const skip = (page - 1) * limit;
  return await Movie.find({ active: true })
    // .skip(skip)
    // .limit(parseInt(limit))
    .populate('producer', 'name')
    .populate('actors', 'name');
};

exports.createMovie = async (data) => {
  const movie = new Movie(data);
  return await movie.save();
};

exports.updateMovie = async (id, data) => {
  return await Movie.findOneAndUpdate({ _id: id, active: true }, data, { new: true });
};

exports.deleteMovie = async (id) => {
  return await Movie.findOneAndUpdate({ _id: id }, { active: false }, { new: true });
};
