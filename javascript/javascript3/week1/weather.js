const apiKey = "088fa901df58c5e65281cdffd7c8d1a9";
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=${apiKey}`;
fetch(currentWeatherUrl)
  .then((response) => response.json())
  .then((data) => {
    const city = data.name;
  })
  .catch((error) => {
    console.error(error);
  });
