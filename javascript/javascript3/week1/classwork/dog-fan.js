// Get a random dog image and display it in the browser
const randomImageUrl = "https://dog.ceo/api/breeds/image/random";
fetch(randomImageUrl)
  .then((response) => response.json())
  .then((dog) => {
    console.log(dog);
    const imageOne = document.createElement("img");
    imageOne.src = dog.message;
    document.body.appendChild(imageOne);
  });

// Get a new image every 2 sec.
const imageTwo = document.createElement("img");
setInterval(function () {
  fetch(randomImageUrl)
    .then((response) => response.json())
    .then((dog) => {
      imageTwo.src = dog.message;
    });
  document.body.appendChild(imageTwo);
}, 2000);

// Get the list of all breeds from https://dog.ceo/api/breeds/list/all

const listUrl = "https://dog.ceo/api/breeds/list/all";
fetch(listUrl)
  .then((response) => response.json())
  .then((list) => {
    const breedList = list.message;
    console.log(breedList); // list is an object

    // Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random

    const imageThree = document.createElement("img");
    const randomBreedUrl =
      "https://dog.ceo/api/breed/[BREEDNAME]/images/random";
    fetch(randomBreedUrl)
      .then((response) => response.json())
      .then((dog) => {
        imageThree.src = dog.message;
      });
    document.body.appendChild(imageThree);

    // Display the name of the breed under the image
  });
