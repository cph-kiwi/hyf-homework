// Find a cool api.

const theCocktailDbUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
fetch(theCocktailDbUrl)
  .then((response) => response.json())
  .then((list) => {
    console.log(typeof list, list); // an object with nested array. Each item in the array is an object. The object representing each cocktail has many keys, and strings associated with the keys.
  })
  .catch((error) => {
    console.error(error);
  });

// Explain how it works and what kind of json data the api responds with.
// It returns an array of 25 cocktails, detailing the ingredients and instructions to create the cocktail.
