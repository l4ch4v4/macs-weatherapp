let apiKey = "79f47b6b9113e21a5b5e8344934cbfbe";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Denver,Co&units=metric";

function showTempurature(response) {
  console.log(response.data);
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTempurature);
