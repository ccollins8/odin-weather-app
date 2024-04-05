import "./style.css";
import getLocationData from "./modules/data";
import setCardData from "./modules/ui";

const locationInput = document.getElementById("location-input");
const button = document.getElementById("search");

const apiKey = "94c1dc9133604ae8916213001240204";

// button.addEventListener('click', () => {
//     fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput.value}`, { mode: 'cors'})
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(response) {
//         console.log(response.current.temp_f)
//     })

// })

// async and await

button.addEventListener("click", async () => {
  const locationData = await getLocationData(locationInput.value);
  setCardData(locationData);
  console.log(locationData);
});

// async function getLocationInfo(location) {
//     const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=85022`, { mode: 'cors'})
//     const locationData = await response.json();

//     const temperature = locationData.current.temp_f
//     const feelsLike = locationData.current.feelsLike_f
//     const humidity = locationData.current.humidity
//     const wind = locationData.current.wind_mph
//     console.log(locationData)
// }
// getLocationInfo()
