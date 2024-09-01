const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = 'c06406f50377c9a821a0b02d7654de9d'
const diffKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;

    if(city){
        fetchWeather(city)
    } else {
        //todo: agregar validacion al input
        alert('Ingresa una ciudad')
    }
})
//con esta funcion llamamos a la api para que devuelva la info pedida
function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
    .then( data => data.json())
    .then(data => console.log(data));
    
}
