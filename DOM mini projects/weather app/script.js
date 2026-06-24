// API key is loaded from .env (see VITE_OPENWEATHER_API_KEY)
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const DEFAULT_CITY = "New York";

const searchForm = document.querySelector(".search-bar");
const cityInput = document.getElementById("city-search");
const cityEl = document.querySelector(".city");
const dateEl = document.querySelector(".date");
const weatherIconEl = document.querySelector(".weather-icon");
const temperatureEl = document.querySelector(".temperature");
const conditionEl = document.querySelector(".condition");
const detailValues = document.querySelectorAll(".detail-value");
const forecastGrid = document.querySelector(".forecast-grid");
const highlightValues = document.querySelectorAll(".highlight-value");
const dashboard = document.querySelector(".dashboard");

function getWeatherIcon(code) {
  if (code >= 200 && code <= 232) return "🌩";
  if (code >= 300 && code <= 321) return "🌧";
  if (code >= 500 && code <= 531) return "🌧";
  if (code >= 600 && code <= 622) return "🌨";
  if (code >= 701 && code <= 781) return "🌫";
  if (code === 800) return "☀";
  if (code === 801) return "🌤";
  if (code === 802) return "⛅";
  return "☁";
}

function formatWithOffset(timestamp, timezoneOffset, options) {
  const localTime = new Date(timestamp * 1000 + timezoneOffset * 1000);
  return new Intl.DateTimeFormat("en-US", {
    ...options,
    timeZone: "UTC",
  }).format(localTime);
}

function formatDate(timestamp, timezoneOffset) {
  return formatWithOffset(timestamp, timezoneOffset, {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(timestamp, timezoneOffset) {
  return formatWithOffset(timestamp, timezoneOffset, {
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatDay(timestamp, timezoneOffset) {
  return formatWithOffset(timestamp, timezoneOffset, {
    weekday: "short",
  });
}

function getUvLabel(value) {
  if (value <= 2) return "Low";
  if (value <= 5) return "Moderate";
  if (value <= 7) return "High";
  if (value <= 10) return "Very High";
  return "Extreme";
}

function showError(message) {
  dashboard.classList.add("error-state");
  cityEl.textContent = "Error";
  dateEl.textContent = message;
  weatherIconEl.textContent = "⚠️";
  temperatureEl.innerHTML = "—";
  conditionEl.textContent = "";
  detailValues.forEach((el) => (el.textContent = "—"));
  forecastGrid.innerHTML = "";
  highlightValues.forEach((el) => (el.textContent = "—"));
}

function clearError() {
  dashboard.classList.remove("error-state");
}

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch weather data.");
  }

  return data;
}

async function fetchForecast(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch forecast data.");
  }

  return data;
}

async function fetchUvIndex(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) return null;

  const data = await response.json();
  return data.value;
}

function updateCurrentWeather(data) {
  const { main, weather, wind, visibility, sys, timezone } = data;
  const condition = weather[0];

  cityEl.textContent = data.name;
  dateEl.textContent = formatDate(data.dt, timezone);
  weatherIconEl.textContent = getWeatherIcon(condition.id);
  temperatureEl.innerHTML = `${Math.round(main.temp)}<span class="unit">°C</span>`;
  conditionEl.textContent = condition.description;

  detailValues[0].textContent = `${Math.round(main.feels_like)}°C`;
  detailValues[1].textContent = `${main.humidity}%`;
  detailValues[2].textContent = `${Math.round(wind.speed * 3.6)} km/h`;
  detailValues[3].textContent = `${main.pressure} hPa`;

  highlightValues[0].textContent = formatTime(sys.sunrise, timezone);
  highlightValues[1].textContent = formatTime(sys.sunset, timezone);
  highlightValues[3].textContent = `${(visibility / 1000).toFixed(1)} km`;

  return { lat: data.coord.lat, lon: data.coord.lon, timezone };
}

function updateForecast(forecastData, timezoneOffset) {
  const dailyItems = [];
  const seenDays = new Set();

  for (const item of forecastData.list) {
    const dayKey = new Date(item.dt * 1000).toDateString();
    if (!seenDays.has(dayKey)) {
      seenDays.add(dayKey);
      dailyItems.push(item);
    }
    if (dailyItems.length === 5) break;
  }

  forecastGrid.innerHTML = dailyItems
    .map((item) => {
      const condition = item.weather[0];
      return `
        <article class="forecast-card card">
          <p class="forecast-day">${formatDay(item.dt, timezoneOffset)}</p>
          <span class="forecast-icon" aria-hidden="true">${getWeatherIcon(condition.id)}</span>
          <p class="forecast-temp">${Math.round(item.main.temp)}°</p>
          <p class="forecast-condition">${condition.main}</p>
        </article>
      `;
    })
    .join("");
}

async function updateUvIndex(lat, lon) {
  const uv = await fetchUvIndex(lat, lon);
  highlightValues[2].textContent =
    uv !== null ? `${Math.round(uv)} — ${getUvLabel(uv)}` : "—";
}

async function loadWeather(city) {
  if (!API_KEY) {
    showError("Add your API key to the .env file");
    return;
  }

  clearError();
  dashboard.classList.add("loading");

  try {
    const [weatherData, forecastData] = await Promise.all([
      fetchWeather(city),
      fetchForecast(city),
    ]);

    const { lat, lon, timezone } = updateCurrentWeather(weatherData);
    updateForecast(forecastData, timezone);
    await updateUvIndex(lat, lon);
  } catch (error) {
    showError(error.message);
  } finally {
    dashboard.classList.remove("loading");
  }
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;
  loadWeather(city);
});

loadWeather(DEFAULT_CITY);
