const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controllers');

/**
 * @swagger
 * /movies:
 * get:
 * summary: Retrieve a list of movies
 * description: Retrieve a list of movies with optional filters and pagination.
 * parameters:
 * - in: query
 * name: name
 * schema:
 * type: string
 * description: Movie title to filter by.
 * - in: query
 * name: genre
 * schema:
 * type: string
 * description: Genre to filter by.
 * - in: query
 * name: year
 * schema:
 * type: integer
 * description: Year of the movie.
 * - in: query
 * name: fromYear
 * schema:
 * type: integer
 * description: Start year for a year range filter.
 * - in: query
 * name: toYear
 * schema:
 * type: integer
 * description: End year for a year range filter.
 * - in: query
 * name: page
 * schema:
 * type: integer
 * default: 1
 * description: Page number for pagination.
 * - in: query
 * name: limit
 * schema:
 * type: integer
 * default: 10
 * description: Number of movies per page.
 * responses:
 * 200:
 * description: A list of movies.
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * movies:
 * type: array
 * items:
 * type: object
 * totalCount:
 * type: integer
 * totalPages:
 * type: integer
 * currentPage:
 * type: integer
 *
 * /movies/{id}:
 * get:
 * summary: Get a movie by ID
 * parameters:
 * - in: path
 * name: id
 * required: true
 * description: Numeric ID of the movie to retrieve.
 * schema:
 * type: string
 * responses:
 * 200:
 * description: A single movie object.
 * 404:
 * description: Movie not found.
 * * /genres:
 * get:
 * summary: Get a list of unique movie genres
 * description: Returns a list of all unique genres available in the dataset.
 * responses:
 * 200:
 * description: An array of unique genre strings.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * type: string
 */

router.get('/', moviesController.getAllMovies);
router.get('/genres', moviesController.getGenres);
router.get('/:id', moviesController.getMovieById);

module.exports = router;
