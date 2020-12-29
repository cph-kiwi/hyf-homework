// This exercise is repetition of array functions. you dont have to use chaining or anything fancy. Just fetch the movies and use the correct array function to get the following movies:
// Fetch movies from this api:
// 1. Create an array of bad movies
// 2. Creat an array of bad movies since year 2000

const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

function getMovies() {
  fetch(url)
    .then((response) => response.json())
    .then((movies) => {
      const badMovies = movies.filter((movie) => movie.rating < 3);
      console.log(badMovies.map((filteredMovie) => filteredMovie.title));
      const badMoviesAfter2000 = badMovies.filter((movie) => movie.year > 2000);
      console.log(
        badMoviesAfter2000.map((filteredMovie) => filteredMovie.title)
      );
    })
    .catch((error) => {
      console.log(error.message);
    });
}

getMovies();

/*

// Just for practice, I rewrote this using async/await (although it is not exactly the same function)

async function getMovies() {
  try {
    const moviesResponse = await fetch(url);
    const movies = await moviesResponse.json();
    const moviesAfter2000 = movies
      .filter((movie) => movie.year > 2000)
      .map((filteredMovie) => filteredMovie.title);
    console.log(moviesAfter2000);
  } catch (error) {
    console.log(error);
  }
}

getMovies();
*/
