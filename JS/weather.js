const API_KEY = "34343101e2562205feacdf0fbd194ff9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span");
        const city = document.querySelector("#city span");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);