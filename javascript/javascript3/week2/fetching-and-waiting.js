// 1. Do the 3 steps below using promises and .then.
// 2. Do the 3 steps below using async/await
// The 3 steps:
// 1. Wait 3 seconds
// 2. After 3 seconds fetch some data from any api you like
// 3. Log out the data from the api
// Which way do you prefer, the promise way or the async/await way?

const planetsUrl = "http://swapi.dev/api/planets/";
const speciesUrl = "http://swapi.dev/api/species/";

function getPlanets() {
  setTimeout(() => {
    fetch(planetsUrl)
      .then((response) => response.json())
      .then((data) => {
        const planets = data.results;
        const planetNames = planets.map((planet) => planet.name);
        console.log(planetNames);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, 3000);
}

getPlanets();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getSpecies() {
  await delay(3000);
  try {
    const response = await fetch(speciesUrl);
    const data = await response.json();
    const species = data.results;
    const speciesNames = species.map((type) => type.name);
    console.log(speciesNames);
  } catch (error) {
    console.log(error);
  }
}

getSpecies();

// I prefer the promise way as it seems easier for me to get it to work the way I want. It seems more direct than async/await.
