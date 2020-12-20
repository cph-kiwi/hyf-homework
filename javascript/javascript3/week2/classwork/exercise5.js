// Using async await

// 1. Fetch the astronauts
// 2. After the astronauts has been fetched, fetch movies using this api
// 3. Log out the movies

async function getAstronauts() {
  // await waits until we have data from fetch before it runs the next line. No need for callbacks 🤯
  console.log("Before we fetch data");
  const astronautsResponse = await fetch(
    "http://api.open-notify.org/astros.json"
  );
  console.log(
    "This is logged out after some time, even though the code looks synchronous! 🤯"
  );
  const astronauts = await astronautsResponse.json();
  console.log("This is logged out after some time! 🤯");
  console.log(astronauts);
  return astronauts;
}

const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

async function run() {
  try {
    const astronauts = await getAstronauts();
    console.log(astronauts);
    const response = await fetch(url);
    const movies = await response.json();
    const highestRatedMovies = movies
      .filter((movie) => movie.rating > 9)
      .map((filteredMovie) => filteredMovie.title);
    console.log(highestRatedMovies);
  } catch (error) {
    console.log(error);
  }
}

run();
