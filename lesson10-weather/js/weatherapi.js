// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


/**
 * Change to upper case the first letter of a string
 * @param {String} str 
 * @returns {String} input string with the first letter in upper case
 */
const capitalize = (str) => {
    let strArr = str.split(" ");
    return strArr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}


const value = "02784d30f1ae2ee62ed167493d7533e9"
const cityId = "5861897";
const cityName = "Fairbanks";
const units = "imperial";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${value}&units=${units}`;


fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // this is temporary for development only
        //update the temperature
        currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;

        // update the icon
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const desc = data.weather[0].description;

        weatherIcon.setAttribute('src', iconsrc); weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = capitalize(desc);
    });


