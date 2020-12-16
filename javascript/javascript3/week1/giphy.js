const searchInput = document.getElementById("search-input");
const buttonElement = document.getElementById("button");
const numberInput = document.getElementById("number-input");

function getUrl(query, limit) {
  const apiKey = "TnDsmsVbSX41qtT6RnNUcRRyYdb1GcQV";
  return `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}`;
}

function fetchGif() {
  clear();
  const limit = numberInput.value === "" ? 1 : Number(numberInput.value);

  const url = getUrl(searchInput.value, limit);

  fetch(url)
    .then((response) => response.json())
    .then((junk) => {
      console.log(junk);
      junk.data.forEach((item) => {
        const image = document.createElement("img");

        image.src = item.images.fixed_width.url;
        document.body.appendChild(image);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function clear() {
  const listOfImage = document.querySelectorAll("img");
  listOfImage.forEach((image) => {
    document.body.removeChild(image);
  });
}

buttonElement.addEventListener("click", fetchGif);
