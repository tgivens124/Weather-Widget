let weather = {
  apikey: "9fc20c25d31342708fe214803220407",
  fetchWeather: function (city) {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=9fc20c25d31342708fe214803220407" +
        "&q=" +
        city +
        "&aqi=no"
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data.location;
    const { text } = data.current.condition;
    const { temp_f } = data.current;
    const { humidity } = data.current;
    const { wind_mph } = data.current;
    const { region } = data.location;
    const { last_updated } = data.current;
    console.log(name, text, temp_f, humidity, wind_mph, last_updated);
    document.querySelector(".city-name").innerText = name + ", " + region;
    document.querySelector(".temp").innerText = temp_f;
    document.querySelector(".description").innerText = text;
    document.querySelector(".wind").innerText = "Wind " + wind_mph + "km/h";
    document.querySelector(".humidity").innerText =
      "Humidity " + humidity + "%";
    document.querySelector(".last-updated").innerText =
      "Last Updated: " + last_updated;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search-button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
document.querySelector(".Dallas").addEventListener("click", function () {
  weather.fetchWeather("dallas");
});
document.querySelector(".New-York").addEventListener("click", function () {
  weather.fetchWeather("New York");
});
document.querySelector(".Chicago").addEventListener("click", function () {
  weather.fetchWeather("Chicago");
});
window.onload = weather.fetchWeather("Dallas");
