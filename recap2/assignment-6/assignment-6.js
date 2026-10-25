// Recap 2, assignment 6: Movie ratings

const movies = [];
const count = Number(prompt('How many movies do you want to enter?'));

function sortArray(arr, order = 'asc') {
  if (order === 'asc') {
    return arr.toSorted((a, b) => a.rating - b.rating);
  } else if (order === 'desc') {
    return arr.toSorted((a, b) => b.rating - a.rating);
  } else throw new Error('Invalid order parameter. Use "asc" or "desc".');
}
for (let i = 0; i < count; i++) {
  const movieTitle = prompt(`Enter a movie title ${i + 1}`);
  let rating = Number(prompt(`Enter a rating for ${movieTitle}`));
  while (!(rating >= 1 && rating <= 5)) {
    window.alert('Rating must be between 1 and 5');
    rating = Number(prompt(`Enter a rating for ${movieTitle}`));
  }
  movies.push({title: movieTitle, rating: rating});
}
console.log(movies);
const sortedMovies = sortArray(movies, 'desc');
const highRated = document.getElementById('highRatedMovie');

if (sortedMovies.length === 0) {
  highRated.textContent = 'No movies rated';
} else {
  const topMovie = sortedMovies[0];
  highRated.textContent = `${topMovie.title} - ${topMovie.rating}/5`;
}

for (const movie of sortedMovies) {
  const li = document.createElement('li');
  li.textContent = `${movie.title} - ${movie.rating}/5`;
  document.getElementById('movie-list').appendChild(li);
}
