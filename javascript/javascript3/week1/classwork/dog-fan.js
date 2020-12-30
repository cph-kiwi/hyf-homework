// Get a random dog image and display it in the browser
const randomImageUrl = "https://dog.ceo/api/breeds/image/random";
fetch(randomImageUrl)
  .then((response) => response.json())
  .then((dog) => {
    // console.log(dog);
    const imageOne = document.createElement("img");
    imageOne.src = dog.message;
    document.body.appendChild(imageOne).style.width = "300px";
  })
  .catch((error) => {
    console.error(error);
  });

// Get a new image every 2 sec.
const imageTwo = document.createElement("img");
setInterval(function () {
  fetch(randomImageUrl)
    .then((response) => response.json())
    .then((dog) => {
      imageTwo.src = dog.message;
    })
    .catch((error) => {
      console.error(error);
    });
  document.body.appendChild(imageTwo).style.width = "300px";
}, 2000);

// Get the list of all breeds from https://dog.ceo/api/breeds/list/all
const listUrl = "https://dog.ceo/api/breeds/list/all";
fetch(listUrl)
  .then((response) => response.json())
  .then((list) => {
    const breedList = list.message;
    const breedArray = Object.keys(breedList);
    const index = Math.round((breedArray.length - 1) * Math.random());
    const breedName = breedArray[index];
    showBreed(breedName);
  })
  .catch((error) => {
    console.error(error);
  });

// Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random
function showBreed(breedName) {
  const breedUrl = `https://dog.ceo/api/breed/${breedName}/images/random`;
  fetch(breedUrl)
    .then((response) => response.json())
    .then((breed) => {
      const imageThree = document.createElement("img");
      imageThree.src = breed.message;
      document.body.appendChild(imageThree).style.width = "300px";

      // Display the name of the breed under the image
      const h3 = document.createElement("h3");
      h3.textContent = breedName;
      document.body.appendChild(h3);
    })
    .catch((error) => {
      console.error(error);
    });
}
