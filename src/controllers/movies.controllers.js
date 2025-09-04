const moviesService = require('../services/movies.services');

exports.getAllMovies = (req, res, next) => {
  try {
    const filters = req.query;
    const result = moviesService.getFilteredMovies(filters);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getMovieById = (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = moviesService.getMovieById(id);
    if (!movie) {
      const error = new Error('Movie not found.');
      error.status = 404;
      throw error;
    }
    res.json(movie);
  } catch (error) {
    next(error);
  }
};

exports.getGenres = (req, res, next) => {
  try {
    const genres = moviesService.getUniqueGenres();
    res.json(genres);
  } catch (error) {
    next(error);
  }
};
