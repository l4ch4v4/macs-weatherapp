let apiKey = "79f47b6b9113e21a5b5e8344934cbfbe";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric";

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let description = document.querySelector("#temperature-description");
  temperatureElement.innerHTML = `${temperature}℃`;
  description.innerHTML = response.data.weather[0].description;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
