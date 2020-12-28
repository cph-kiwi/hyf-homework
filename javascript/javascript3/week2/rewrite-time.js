// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises. The getCurrentPosition function is probably going to throw an error, but that is fine. As long as you can use it as a promise.

function setTimeoutPromise(resolveAfter) {
  return new Promise(() => {
    setTimeout(() => {
      console.log(`Called after ${resolveAfter / 1000} seconds`);
    }, resolveAfter);
  });
}

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

function getCurrentLocation() {
  return new Promise(() => {
    function success(position) {
      const coords = position.coords;
      console.log(`Latitude: ${coords.latitude}`);
      console.log(`Longitude: ${coords.longitude}`);
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error);
  });
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });
