// Recap 2, assignment 6: Movie ratings
let movieTitle = prompt('Enter a movie');

const movies = [];

function sortArray(arr, order = 'asc') {
  if (order === 'asc') {
    return arr.toSorted((a, b) => a.rating - b.rating);
  } else if (order === 'desc') {
    return arr.toSorted((a, b) => b.rating - a.rating);
  } else throw new Error('Invalid order parameter. Use "asc" or "desc".');
}
while (movieTitle !== '' && movieTitle !== null) {
  let rating = Number(prompt(`Enter a rating for ${movieTitle}`));
  while (!(rating >= 1 && rating <= 5)) {
    window.alert('Rating must be between 1 and 5');
    rating = Number(prompt(`Enter a rating for ${movieTitle}`));
  }
  movies.push({title: movieTitle, rating: rating});
  movieTitle = prompt('Enter a movie or leave blank to finish');
}
console.log(movies);
const sortedMovies = sortArray(movies, 'desc');
let topMovie = sortedMovies[0];

document.getElementById('highRatedMovie').textContent =
  `${topMovie.title} - ${topMovie.rating}/5`;

for (const movie of sortedMovies) {
  const li = document.createElement('li');
  li.textContent = `${movie.title} - ${movie.rating}/5`;
  document.getElementById('movie-list').appendChild(li);
}
