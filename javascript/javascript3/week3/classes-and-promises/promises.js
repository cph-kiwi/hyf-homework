const bodyElement = document.querySelector("body");

class User {
  constructor(firstName, lastName, username) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
  }

  fetchRepos() {
    fetch(`https://api.github.com/users/${this.username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const userUlElement = document.createElement("ul");
        const userLiElement = document.createElement("li");
        userLiElement.textContent = `${this.username}'s repositories`;

        userUlElement.appendChild(userLiElement);
        bodyElement.appendChild(userUlElement);

        data.forEach((item) => {
          const repoUlElement = document.createElement("ul");
          const liElement = document.createElement("li");
          liElement.classList.add("list-item");
          liElement.textContent = `
          Repository name: ${item.full_name}
          Repository URL: ${item.url}
          Repository owner: ${item.owner.login}
          `;
          repoUlElement.appendChild(liElement);
          bodyElement.appendChild(repoUlElement);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const user1 = new User("Benjamin", "Hughes", "benna100");

const user2 = new User("Beth", "Jackson", "cph-kiwi");

const user3 = new User("Dlnya", "Mazhari", "DlnyaMazhari");

const user4 = new User("Mohammed", "Enqira", "Enqira");

const user5 = new User("Tithi", "Kundu", "TITHI1244");

function fetchAllAtOnce() {
  Promise.all([
    user3.fetchRepos(),
    user4.fetchRepos(),
    user5.fetchRepos(),
  ]).then(() => {
    console.log("All fetched at once");
  });
}
fetchAllAtOnce();
