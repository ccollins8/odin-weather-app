const apiKey = "94c1dc9133604ae8916213001240204";

async function getLocationData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`,
    { mode: "cors" },
  );
  const locationData = await response.json();
  return locationData;
}

export default getLocationData;
