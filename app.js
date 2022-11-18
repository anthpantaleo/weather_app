const cityInput = document.querySelector("#city");
const errorDisplay = document.querySelector(".errordisplay");
//   errorDisplay.style.display = "block";

cityInput.addEventListener("change", (e) => {
  e.preventDefault();

  searchedCity = cityInput.value.toLowerCase();
  cityInput.value = "";
});
