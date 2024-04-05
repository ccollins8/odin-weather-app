function setCardData(data) {
  const locationData = data;

  const locationName = locationData.location.name;
  const temperature = locationData.current.temp_f;
  const feelsLike = locationData.current.feelslike_f;
  const humidity = locationData.current.humidity;
  const wind = locationData.current.wind_mph;

  const locationNameNode = document.getElementById("location-name");
  locationNameNode.textContent = locationName;

  const tempNode = document.getElementById("temperature");
  tempNode.textContent = temperature;

  const feelsLikeNode = document.getElementById("feels-like");
  feelsLikeNode.textContent = feelsLike;

  const humidityNode = document.getElementById("humidity");
  humidityNode.textContent = humidity;

  const windNode = document.getElementById("wind");
  windNode.textContent = wind;
}

export default setCardData;
