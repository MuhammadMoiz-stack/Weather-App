const searchBtn = document.querySelector(".weather-input button");
const cityInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
  const APIKey = "df1cfd74f5a55b82ea452bc3a20c5eaf";
  const city = cityInput.value.trim();
  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found");
        const WeatherImage = document.querySelector(".weather-img img");
        WeatherImage.src = "./images/not-found-removebg-preview.png";
        cityInput.value = "";
        return;
      }
      const WeatherImage = document.querySelector(".weather-img img");
      const Temperature = document.querySelector(".temperature");
      const Description = document.querySelector(".description");
      const Humidity = document.querySelector(".humidity-info span");
      const Wind = document.querySelector(".wind-info span");
      const CityName = document.querySelector(".weather-city h2");

      CityName.innerText = data.name;
      Temperature.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
      Description.innerText = data.weather[0].description;
      Humidity.innerText = `${data.main.humidity} %`;
      Wind.innerText = `${data.wind.speed} m/s`;

      switch (data.weather[0].main) {
        case "Clear":
          WeatherImage.src = "./images/sunny-removebg-preview.png";
          break;
        case "Rain":
          WeatherImage.src =
            "./images/rain-cloud_16405500-removebg-preview.png";
          break;
        case "Snow":
          WeatherImage.src = "./images/snow-removebg-preview.png";
          break;
        case "Haze":
          WeatherImage.src = "./images/Haze-removebg-preview.png";
          break;
        case "Clouds":
          WeatherImage.src = "./images/cloudy_img-removebg-preview.png";
          break;
        default:
          WeatherImage.src = "./images/cloudy_img-removebg-preview.png";
      }
    })
    .catch(() => {
      alert("City not found");
    });
});
