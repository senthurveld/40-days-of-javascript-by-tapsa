
// Get the API Key from here: https://openweathermap.org/api
const API_KEY = "e9b4ab37e67bf8563a114a0057846420";

const queryWeather = async (city) => {
  try {
    showLoading();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    displayWeather(data);
  } catch (err) {
    showError(err.message);
  } finally {
    hideLoading();
  }
};

document.querySelector('#searchBtn').addEventListener('click', () => {
  const city = document.querySelector('#cityInput').value;
  if (city) {
    queryWeather(city);
  }
});

function showLoading() {
  document.querySelector('#loading').innerHTML = '⏳ Loading...';
}

function hideLoading() {
    document.querySelector('#loading').innerHTML = '';
}

function displayWeather(data) {
  const html = `
    <h2>${data.name}</h2>
    <p>🌡️ Temp: ${data.main.temp}°C</p>
    <p>☁️ Condition: ${data.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
  `;
  document.querySelector('#result').innerHTML = html;
}

function showError(message) {
  document.querySelector('#result').innerHTML = `<p style="color:red;">❌ ${message}</p>`;
}


(async () => {
  const API_KEY = "a8524b8d";
  const movie = "mersal";

  const res = await fetch(
    `https://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`
  );  
  if(!res.ok) {
      throw new Error("Not Found on database");
  } else {
    console.log('good');
  }

  const data = await res.json();

  console.log(data);
  console.log(data.Title);
  document.getElementById("img").innerHTML = data.Poster
  
  
})();
