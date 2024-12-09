// script.js

// Clé API OpenWeatherMap (crée un compte sur https://openweathermap.org pour en obtenir une)
const apiKey = "6fa99b7ab9afc971da2af73a831f166a";

// Fonction pour récupérer les données météo
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ville introuvable");
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

// Fonction pour afficher les données
function displayWeather(data) {
    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temperature").textContent = `Température : ${data.main.temp}°C`;
    document.getElementById("description").textContent = `Conditions : ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `Humidité : ${data.main.humidity}%`;
}

// Ajouter un événement au bouton de recherche
document.getElementById("search-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Veuillez entrer une ville.");
    }
});
