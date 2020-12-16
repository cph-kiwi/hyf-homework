const apiKey = "088fa901df58c5e65281cdffd7c8d1a9";
const toCelsius = "&units=metric";
let latitude = 0;
let longitude = 0;
let url = "";

const cityInput = document.getElementById("city-input");
const buttonElement = document.getElementById("button");
const messageElement = document.getElementById("message");
const cityNameElement = document.getElementById("displayed-city-name");
const tempElement = document.getElementById("temp");
const iconElement = document.getElementById("weather-type-icon");
const windElement = document.getElementById("wind-speed");
const cloudyElement = document.getElementById("cloudy");
const sunriseElement = document.getElementById("sunrise");
const sunsetElement = document.getElementById("sunset");

const cityNameForecastElement = document.getElementById("forecast-city-name");
const tempForecastElement = document.getElementById("forecast-temp");
const iconForecastElement = document.getElementById("forecast-icon");
const windForecastElement = document.getElementById("forecast-wind-speed");
const cloudyForecastElement = document.getElementById("forecast-cloudy");

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

      const riseUTC = data.sys.sunrise * 1000;
      const riseDateObject = new Date(riseUTC);
      const risedt = luxon.DateTime.fromJSDate(riseDateObject, {
        zone: "utc",
      }).plus({ second: data.timezone });
      sunriseElement.textContent = `Sunrise: ${risedt.hour}: ${risedt.minute}: ${risedt.second}`;

      const sunsetUTC = data.sys.sunset * 1000;
      const sunsetDateObject = new Date(sunsetUTC);
      const sunsetdt = luxon.DateTime.fromJSDate(sunsetDateObject, {
        zone: "utc",
      }).plus({ second: data.timezone });
      sunsetElement.textContent = `Sunset: ${sunsetdt.hour}: ${sunsetdt.minute}: ${sunsetdt.second}`;
    })
    .catch((error) => {
      console.error(error);
    });
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

buttonElement.addEventListener("click", fetchWeather);
buttonElement.addEventListener("click", fetchForecast);
