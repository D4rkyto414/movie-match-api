const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const movies = [];
const filePath = path.join(__dirname, '../../movies.csv');

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (data) => {
    // Clean and transform data
    const movie = {
      id: data.id,
      title: data.title,
      genres: data.genres.split('|'),
      year: parseInt(data.year),
      director: data.director,
      runtime: parseInt(data.runtime),
    };
    movies.push(movie);
  })
  .on('end', () => {
    console.log('Movies data loaded.');
  });

module.exports = movies;
