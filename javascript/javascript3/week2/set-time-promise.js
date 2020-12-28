// Create a function that has one parameter: resolveAfter. Calling this function will return a promise that resolves after the resolveAfter seconds has passed.
// When you have written the promise, use it with async/await

function functionThatReturnsAPromise(resolveAfter) {
  return new Promise(() => {
    const milliseconds = resolveAfter * 1000;
    setTimeout(() => {
      console.log("I am called asynchronously");
    }, milliseconds);
  });
}

async function run() {
  try {
    const data = await functionThatReturnsAPromise(5);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

run();
