const apiKey = "088fa901df58c5e65281cdffd7c8d1a9";
const toCelsius = "&units=metric";
let latitude = 0;
let longitude = 0;
let url = "";

const cityInput = document.querySelector("#city-input");
const buttonElement = document.querySelector("#button");
const messageElement = document.querySelector("#message");
const cityNameElement = document.querySelector("#displayed-city-name");
const tempElement = document.querySelector("#temp");
const iconElement = document.querySelector("#weather-type-icon");
const windElement = document.querySelector("#wind-speed");
const cloudyElement = document.querySelector("#cloudy");
const sunriseElement = document.querySelector("#sunrise");
const sunsetElement = document.querySelector("#sunset");

const cityNameForecastElement = document.querySelector("#forecast-city-name");
const tempForecastElement = document.querySelector("#forecast-temp");
const iconForecastElement = document.querySelector("#forecast-icon");
const windForecastElement = document.querySelector("#forecast-wind-speed");
const cloudyForecastElement = document.querySelector("#forecast-cloudy");

function findCurrentLocation() {
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    messageElement.textContent = `Latitude: ${Math.round(
      latitude
    )}, Longitude: ${Math.round(longitude)}`;
    fetchWeather();
    fetchForecast();
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
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}${toCelsius}`;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cityNameElement.textContent = `City: ${data.name}`;
      tempElement.textContent = `Temperature: ${Math.round(
        data.main.temp
      )} celsius`;
      iconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      windElement.textContent = `Wind speed: ${data.wind.speed} meter/sec`;
      cloudyElement.textContent = `Cloudiness: ${data.clouds.all}%`;

      const risedt = translateTime(data.sys.sunrise, data.timezone);
      sunriseElement.textContent = `Sunrise: ${risedt.hour}: ${risedt.minute}: ${risedt.second}`;

      const sunsetdt = translateTime(data.sys.sunset, data.timezone);
      sunsetElement.textContent = `Sunset: ${sunsetdt.hour}: ${sunsetdt.minute}: ${sunsetdt.second}`;
    })
    .catch((error) => {
      console.error(error);
    });
}

// This is the only way I could find to add the sunrise and sunset in the local time of the designated city
function translateTime(time, timezone) {
  const DateObject = new Date(time * 1000);
  const dt = luxon.DateTime.fromJSDate(DateObject, {
    zone: "utc",
  }).plus({ second: timezone });
  return dt;
}

function fetchForecast() {
  if (cityInput.value === "") {
    url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}${toCelsius}`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&appid=${apiKey}${toCelsius}`;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cityNameForecastElement.textContent = `24 hour Forecast: ${data.city.name}`;
      tempForecastElement.textContent = `Temperature: ${Math.round(
        data.list[8].main.temp
      )} celsius`;
      iconForecastElement.src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
      windForecastElement.textContent = `Wind speed: ${data.list[8].wind.speed} meter/sec`;
      cloudyForecastElement.textContent = `Cloudiness: ${data.list[8].clouds.all}%`;
    })
    .catch((error) => {
      console.error(error);
    });
}

buttonElement
  .addEventListener("click", fetchWeather)
  .addEventListener("click", fetchForecast);
