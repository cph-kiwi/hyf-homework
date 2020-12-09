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
document.querySelector("#display").addEventListener("click", function () {
  notThisFunctionName(5, "Called after 5 seconds");
});

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

// Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api (application programmer interface)
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
function locateMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    console.log("success", status, position, mapLink);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    console.log("error", status, mapLink);
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

// Optional Now show that location on a map using fx the Google maps api
// Source: https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: position.coords.latitude, lng: position.coords.longitude },
    zoom: 8,
  });
}

// Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions
function runAfterDelay(delay, callback) {
  const milliseconds = delay * 1000;
  setTimeout(callback, milliseconds);
}

runAfterDelay(4, function () {
  console.log("should be logged after 4 seconds");
});

// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
let lastClick;

document.querySelector("body").addEventListener("click", function () {
  const time = Date.now();

  if (lastClick > time - 500) {
    console.log("double click!");
  }

  lastClick = time;
});
