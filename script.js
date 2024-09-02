const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = 'c06406f50377c9a821a0b02d7654de9d'
const diffKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;

    if(city){
        fetchWeather(city)
    } else {
        alert('Ingresa una ciudad')
    }
})


//con esta funcion llamamos a la api para que devuelva la info pedida
function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
    .then( data => data.json())
    .then( data => showWeatherData(data))
    .then( data => (data))
}

const emptySearch = document.getElementById('cityInput')
let error = document.getElementById('error')

if(error === ''){
    showError(error, 'Ingresa una ciudad');
} 

function showWeatherData(data) {
    const divResponseData = document.getElementById('responseData');
    divResponseData.innerHTML = '';

    const cityName = data.name;
    const weather = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const minTemp = data.main.temp_min;
    const maxtemp = data.main.temp_max;
    const wind = data.wind.speed;
    const sunset = data.sys.sunset;
    const sunrise = data.sys.sunrise;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}`

    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png` 

    const tempInfo = document.createElement('p');
    tempInfo.textContent = `Temperatura Actual: ${Math.floor(temp - diffKelvin)}°C`;

    const feelsLikeInfo = document.createElement('p');
    feelsLikeInfo.textContent = `Sensacion Termica: ${Math.floor(feelsLike - diffKelvin)}°C`;

    const paramsInfo = document.createElement('p');
    paramsInfo.textContent = `Minima: ${Math.floor(minTemp - diffKelvin)}°C    Maxima: ${Math.floor(maxtemp - diffKelvin)}°C`

    const windInfo = document.createElement('p');
    windInfo.textContent = `Viento: ${wind} KM/H`;

    const sunInfo = document.createElement('p');
    sunInfo.textContent = `Sunset: ${sunset} Sunrise: ${sunrise}`



    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(iconInfo);
    divResponseData.appendChild(tempInfo);
    divResponseData.appendChild(feelsLikeInfo);
    divResponseData.appendChild(paramsInfo);
    divResponseData.appendChild(windInfo);
    divResponseData.appendChild(sunInfo);
}

