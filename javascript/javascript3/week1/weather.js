const apiKey = "088fa901df58c5e65281cdffd7c8d1a9";
const toCelsius = "&units=metric";
let latitude = 0;
let longitude = 0;
let url = "";

const cityInput = document.getElementById("city-input");
const cityName = cityInput.value;
const buttonElement = document.getElementById("button");
const messageElement = document.getElementById("message");
const cityNameElement = document.getElementById("displayed-city-name");
const tempElement = document.getElementById("temp");
const iconElement = document.getElementById("weather-type-icon");
const windElement = document.getElementById("wind-speed");
const cloudyElement = document.getElementById("cloudy");
const sunriseElement = document.getElementById("sunrise");
const sunsetElement = document.getElementById("sunset");

function findCurrentLocation() {
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    messageElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
  }

  function error() {
    messageElement.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    messageElement.textContent = "Geolocation is not supported by your browser";
  } else {
    messageElement.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
findCurrentLocation();

function fetchWeather() {
  if (cityInput.value === "") {
    url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}${toCelsius}`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}${toCelsius}`;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cityNameElement.textContent = `City: ${data.name}`;
      tempElement.textContent = `Temperature: ${data.main.temp} celsius`;
      iconElement.src = `http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`;
      windElement.textContent = `Wind speed: ${data.wind.speed} meter/sec`;
      cloudyElement.textContent = `Cloudiness: ${data.clouds.all}%`;
      sunriseElement.textContent = `Sunrise: ${data.sys.sunrise}`;
      sunsetElement.textContent = `Sunset: ${data.sys.sunset}`;
    })
    .catch((error) => {
      console.error(error);
    });
}
fetchWeather();

buttonElement.addEventListener("click", fetchWeather);
