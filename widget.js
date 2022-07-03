let weather = {
  apikey: "97b541aa6a9a3b13860d30153f38d796",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apikey +
        "&units=imperial"
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, description, icon, temp, humidity, speed);
    document.querySelector(".city-name").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp;
    document.querySelector(".description").innerText = description;
    document.querySelector(".wind").innerText =
      "Wind Speed: " + speed + " km/h";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/w/" + icon + ".png";
    document.querySelector(".Weather-Container").classList.remove("loading");
    document.querySelector(".text-container").classList.remove("loading");
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
