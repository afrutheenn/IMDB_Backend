const asyncHandler = require('../utils/asyncHandler');
const movieService = require('../services/Movie.service');

exports.getMovies = asyncHandler(async (req, res) => {
  const movies = await movieService.getAllMovies({
    page: req.query.page,
    limit: req.query.limit
  });
  res.status(200).json({ success: true, count: movies.length, data: movies });
});

exports.getMovie = asyncHandler(async (req, res) => {
  const movie = await movieService.getMovieById(req.params.id);
  if (!movie) {
    return res.status(404).json({ success: false, message: 'Movie not found' });
  }
  res.status(200).json({ success: true, data: movie });
});

exports.createMovie = asyncHandler(async (req, res) => {
  const movie = await movieService.createMovie(req.body);
  res.status(201).json({ success: true, data: movie });
});

exports.updateMovie = asyncHandler(async (req, res) => {
  const movie = await movieService.updateMovie(req.params.id, req.body);
  if (!movie) {
    return res.status(404).json({ success: false, message: 'Movie not found' });
  }
  res.status(200).json({ success: true, data: movie });
});

exports.deleteMovie = asyncHandler(async (req, res) => {
  const movie = await movieService.deleteMovie(req.params.id);
  if (!movie) {
    return res.status(404).json({ success: false, message: 'Movie not found' });
  }
  res.status(200).json({ success: true, data: {} });
});
