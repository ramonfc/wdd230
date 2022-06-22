// select HTML elements to edit
const currentTemp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-1 img');
const captionDesc = document.querySelector('.weather div + p');

const windSpeedHTML = document.querySelector(".wind-speed");
const windChill = document.querySelector(".wind-child");

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
// const cityId = "5861897";
const cityName = "Manizales";
const units = "metric";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${value}&units=${units}`;


fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // this is temporary for development only
        //update the temperature
        let temperature = data.main.temp.toFixed(0);
        let windSpeed = data.wind.speed;

        let fahrenheit = (parseFloat(temperature) * 9 / 5) + 32;
        // let windMiles = parseFloat(windSpeed) / 1.69034 // km/h -> millas por hora
        let windMiles = parseFloat(windSpeed) / 2.237 // m/s -> millas por hora

        console.log(fahrenheit)
        console.log(windMiles)

        if (fahrenheit <= 50 && windMiles > 3) {
            let f = 35.74 + 0.6215 * fahrenheit - 35.75 * windMiles ** 0.16 + 0.4275 * fahrenheit * windMiles ** 0.16;
            windChill.innerHTML = `${f.toFixed(1)} °F`;
            console.log(f)
        }
        else {
            windChill.innerHTML = "N/A";
        }



        windSpeedHTML.innerHTML = `${windSpeed * 3.6.toFixed(0)} Km/h`;
        currentTemp.innerHTML = `<strong>${temperature}</strong>`;

        // update the icon
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const desc = data.weather[0].description;

        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        weatherIcon.style.width = "7.813em"
        captionDesc.textContent = capitalize(desc);
    });
