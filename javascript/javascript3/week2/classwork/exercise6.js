// Get the astronauts and the movies at the same time. Log out the movies and the battery status when both promises has been resolved.

async function getAstronauts() {
  try {
    const astronautsResponse = await fetch(
      "http://api.open-notify.org/astros.json"
    );
    const astronauts = await astronautsResponse.json();

    return astronauts;
  } catch (err) {
    throw "Fetchin the astronauts went wrong";
  }
}

async function getMovies() {
  try {
    const moviesResponse = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const movies = await moviesResponse.json();
    return movies;
  } catch (err) {
    throw "Fetchin the movies went wrong";
  }
}

// with promise.all we are waiting for both at the same time, rather than one at a time.

Promise.all([getAstronauts(), getMovies(), navigator.getBattery()]).then(
  ([astronauts, movies, battery]) => {
    console.log(movies, battery);
  }
);

// const astroPromise = fetch(url).then((response) => response.json());
// const moviePromise = fecth(url).then((response) => response.json());

// Promise.all([getAstronauts(), getMovies(), navigator.getBattery()])
// .then((data) => {
// console.log(data)
// })
// .catch((error) => {
// console.log(error);
// })
