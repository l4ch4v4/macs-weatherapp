function formaDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Thursday",
    "Friday",
    "Satureday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querryselector("#city");
  let description = document.querySelector("#temperature-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temperature}℃`;
  cityElement.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formaDate(response.data.dt * 1000);
}

let apiKey = "79f47b6b9113e21a5b5e8344934cbfbe";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric";

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
