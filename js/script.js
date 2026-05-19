const apiKey = "f8a9f13f9b10ff549d0e33cbbec75591";

const cityInput = document.getElementById("city-input");

const searchBtn = document.getElementById("search-btn");

const cityName = document.getElementById("city-name");

const temperature = document.getElementById("temperature");

const humidity = document.getElementById("humidity");

const windSpeed = document.getElementById("wind-speed");

const description = document.getElementById("description");

/* Fetch Weather */

async function getWeather(city) {

  try {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    /* Error Handling */

    if (!response.ok) {

      throw new Error("City not found");

    }

    const data = await response.json();

    /* Render JSON Data */

    cityName.textContent =
      data.name;

    temperature.textContent =
      `Temperature: ${data.main.temp} °C`;

    humidity.textContent =
      `Humidity: ${data.main.humidity}%`;

    windSpeed.textContent =
      `Wind Speed: ${data.wind.speed} m/s`;

    description.textContent =
      `Description: ${data.weather[0].description}`;

  }

  catch (error) {

    alert(error.message);

  }

}

/* Search Event */

searchBtn.addEventListener("click", () => {

  const city = cityInput.value.trim();

  if (city !== "") {

    getWeather(city);

  }

});
