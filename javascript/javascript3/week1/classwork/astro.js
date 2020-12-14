const p = document.querySelector("p");
const ul = document.querySelector("ul");
const url = "http://api.open-notify.org/astros.json";
fetch(url)
  .then((response) => response.json())
  .then((astronautsList) => {
    p.textContent = `There are ${astronautsList.number} astronauts in space, they are:`;

    for (const person of astronautsList.people) {
      const li = document.createElement("li");
      li.textContent = person.name;
      ul.appendChild(li);
    }
  })
  .catch((error) => {
    console.error(error);
  });
