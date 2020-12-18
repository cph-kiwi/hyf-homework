// 1. Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds.
// 2. Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console.

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 4000);
});

promise1.then(function () {
  console.log("Hello");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 4000);
});

promise2.catch((error) => {
  console.log(error.message);
});
