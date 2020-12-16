const searchInput = document.getElementById("search-input");
const buttonElement = document.getElementById("button");
const numberInput = document.getElementById("number-input");
const ulElement = document.getElementById("gif-list");

function getUrl(query, limit) {
  const apiKey = "TnDsmsVbSX41qtT6RnNUcRRyYdb1GcQV";
  return `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}`;
}

function fetchGif() {
  clear();
  const limit = numberInput.value === "" ? 20 : Number(numberInput.value);

  const url = getUrl(searchInput.value, limit);

  fetch(url)
    .then((response) => response.json())
    .then((junk) => {
      console.log(junk);
      junk.data.forEach((item) => {
        const liElement = document.createElement("li");
        const image = document.createElement("img");
        image.src = item.images.fixed_width.url;
        liElement.appendChild(image);
        ulElement.appendChild(liElement);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function clear() {
  ulElement.innerHTML = "";
}

buttonElement.addEventListener("click", fetchGif);
