const movies = require('../data/movies.data');

exports.getFilteredMovies = (filters) => {
  let filteredMovies = [...movies];

  if (filters.name) {
    filteredMovies = filteredMovies.filter(movie =>
      movie.title.toLowerCase().includes(filters.name.toLowerCase())
    );
  }
  
  if (filters.genre) {
    filteredMovies = filteredMovies.filter(movie =>
      movie.genres.includes(filters.genre)
    );
  }

  if (filters.year) {
    filteredMovies = filteredMovies.filter(movie =>
      movie.year === parseInt(filters.year)
    );
  }

  if (filters.fromYear && filters.toYear) {
    const from = parseInt(filters.fromYear);
    const to = parseInt(filters.toYear);
    if (!isNaN(from) && !isNaN(to)) {
      filteredMovies = filteredMovies.filter(movie =>
        movie.year >= from && movie.year <= to
      );
    }
  }

  
  const page = parseInt(filters.page) || 1;
  const limit = parseInt(filters.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedResults = filteredMovies.slice(startIndex, endIndex);

  return {
    movies: paginatedResults,
    totalCount: filteredMovies.length,
    totalPages: Math.ceil(filteredMovies.length / limit),
    currentPage: page
  };
};

exports.getMovieById = (id) => {
  return movies.find(movie => movie.id === id);
};

exports.getUniqueGenres = () => {
  const allGenres = movies.flatMap(movie => movie.genres);
  return [...new Set(allGenres)];
};
