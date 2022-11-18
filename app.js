const cityInput = document.querySelector("#city");
const errorDisplay = document.querySelector(".errordisplay");
const tempDisplay = document.querySelector("#temp");
const windDisplay = document.querySelector("#wind");

const API_KEY = "dca67048a8605acd92961e5186a52be3";

// errorDisplay.style.display = "block";

cityInput.addEventListener("change", (e) => {
  e.preventDefault();

  searchedCity = cityInput.value.toLowerCase();
  cityInput.value = "";
  console.log(searchedCity);
});
