// Create a function that returns a promise, that i can use like this...

function getLoggedInUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.3) {
        resolve(["benna", "magdy", "carolina"]);
      } else {
        reject(new Error("How about no!!!"));
      }
    }, 5000);
  });
}

getLoggedInUsers()
  .then((users) => {
    console.log(users); // ['benna', 'magdy', 'carolina']
  })
  .catch((error) => {
    console.log(error);
  });

async function andreas() {
  try {
    const users = await getLoggedInUsers();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

andreas();
