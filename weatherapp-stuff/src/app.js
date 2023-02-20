let apiKey = "79f47b6b9113e21a5b5e8344934cbfbe";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric";

function showTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querryselector("#city");
  let description = document.querySelector("#temperature-description");
  let humidityElement = document.querySelector("#humidity");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temperature}℃`;
  description.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
