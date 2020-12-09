// Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function notThisFunctionName(delay, stringToLog) {
  const milliseconds = delay * 1000;
  setTimeout(function () {
    console.log(stringToLog);
  }, milliseconds);
}

notThisFunctionName(5, "This string logged after 5 seconds");
notThisFunctionName(3, "This string logged after 3 seconds");

// Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

document
  .querySelector("#display")
  .addEventListener("click", notThisFunctionName(5, "Called after 5 seconds"));

// Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.
function earthLogger() {
  console.log("Earth");
}

function saturnLogger() {
  console.log("Saturn");
}

function planetLogFunction(planetLogger) {
  planetLogger();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
function locateMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#location").addEventListener("click", locateMe);
