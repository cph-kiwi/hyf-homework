// Create a function that has one parameter: resolveAfter. Calling this function will return a promise that resolves after the resolveAfter seconds has passed.
// When you have written the promise, use it with async/await

function functionThatReturnsAPromise(resolveAfter) {
  return new Promise((resolve) => {
    const milliseconds = resolveAfter * 1000;
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

async function run() {
  await functionThatReturnsAPromise(5);
  console.log("I am called asynchronously");
}

run();
