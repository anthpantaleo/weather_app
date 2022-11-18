const cityInput = document.querySelector("#city");
const errorDisplay = document.querySelector(".errordisplay");
const tempDisplay = document.querySelector("#temp");
const feelsLikeDisplay = document.querySelector("#feelslike");
const windDisplay = document.querySelector("#wind");
const descriptionDisplay = document.querySelector("#something");
const cityTitle = document.querySelector("#citytitle");

const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const API_KEY = "&appid=dca67048a8605acd92961e5186a52be3";
const API_UNITS = "&units=metric";

cityInput.addEventListener("change", (e) => {
  e.preventDefault();

  searchedCity = cityInput.value.toLowerCase();
  cityInput.value = "";

  getWeather(searchedCity);
});

async function getWeather(searchedCity) {
  const searchURL = url + searchedCity + API_KEY + API_UNITS;

  errorDisplay.style.display = "none";
  const response = await fetch(searchURL);
  const results = await response.json();

  if (response.status === 404) {
    errorDisplay.style.display = "block";
  } else {
    updateWeatherDisplay(results);
  }
}

function updateWeatherDisplay(results) {
  // console.log(results)
  cityTitle.textContent = `${results.name}, ${results.sys.country} Weather:`;
  tempDisplay.textContent = results.main.temp;
  feelsLikeDisplay.textContent = results.main.feels_like;
  windDisplay.textContent = `${results.wind.speed} KM, ${results.wind.deg} Degrees`;
  descriptionDisplay.textContent = `${results.weather[0].main}, ${results.weather[0].description}`;
}
