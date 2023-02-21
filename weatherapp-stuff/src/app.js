function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
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
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let description = document.querySelector("#temperature-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temperature}℃`;
  cityElement.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "d85e64fd3f07880a5ac87af3ba99f834";
let city = "london";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
