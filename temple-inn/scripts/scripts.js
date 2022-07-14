function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;


// Date to header:
// const now = new Date();
// const fulldateUK = new Intl.DateTimeFormat("en-UK", {
// 	dateStyle: "full"
// }).format(now);

// document.querySelector(".date").innerHTML = fulldateUK;


// Date to footer
let date = new Date();
const year = document.querySelector("#currentYear");
year.innerHTML = date.getFullYear();

const modified = document.querySelector("#modified");
modified.innerHTML = document.lastModified;





// Current weather:

const getWeatherInfo = async (lat, lon) => {

    const capitalize = (str) => {
        let strArr = str.split(" ");
        return strArr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    }

    const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=02784d30f1ae2ee62ed167493d7533e9&units=metric&exclude=minutely,hourly`);
    const response = await data.json();
    // console.log(response)

    document.querySelector(".temperature").textContent = response.current.temp + " °C";
    document.querySelector(".currently").textContent = capitalize(response.current.weather[0].description);
    document.querySelector(".humidity").textContent = response.current.humidity + " %";
    const weatherIcon = document.querySelector('.weather-1 img');

    // update the icon
    const iconsrc = `https://openweathermap.org/img/w/${response.current.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", response.current.weather[0].description);
    weatherIcon.style.width = "7.813em"

    // Banner: Wheater Alert    
    showBanner(response);

    // Forecast:
    forecastItems(response);
}


const showBanner = (response) => {
    if (response.alerts) {
        const closeBtn = document.querySelector("#close");
        const banner = document.querySelector("#banner");
        const bannerMessage = document.querySelector("#banner p");

        banner.style.display = "flex";
        banner.style.justifyContent = "space-evenly";

        bannerMessage.textContent = `${response.alerts[0].event}: ${response.alerts[0].description}`;

        closeBtn.addEventListener("click", () => {
            banner.style.display = "none";
        });
    }
}


const forecastItems = (response) => {
    let forecastBox = document.querySelector(".forecast");
    let dailyForecast = response.daily;

    for (let i = 1; i < 4; i++) {
        let forecastItem = document.createElement("div");
        forecastItem.classList.add(`forecast-${i}`);

        let day = new Date(parseInt(dailyForecast[i].dt) * 1000);        
        // console.log(day)
        let dayUK = new Intl.DateTimeFormat("en-UK", {
            weekday: "short"
        }).format(day);
        // console.log(dayUK)

        let dayText = document.createElement("p");
        dayText.textContent = dayUK;   

        let tempPicture = document.createElement("picture");
        let tempImage = document.createElement("img");
        tempImage.setAttribute("src", `https://openweathermap.org/img/w/${dailyForecast[i].weather[0].icon}.png`);
        tempImage.setAttribute("alt", `${dailyForecast[i].weather[0].description}`);
        tempImage.setAttribute("loading", "lazy");
        

        tempPicture.appendChild(tempImage);
        
        let tempMax = dailyForecast[i].temp.max;
        let tempMin = dailyForecast[i].temp.min;
        let tempRange = document.createElement("p");
        tempRange.textContent = `${tempMax}°C . ${tempMin}°C`;


        forecastItem.append(dayText, tempPicture, tempRange);
        forecastBox.appendChild(forecastItem);

    }
}

(async () => {
    try {
        const dataIP = await fetch("https://api.ipify.org?format=json");
        const responseIP = await dataIP.json();
        const ip = responseIP.ip;

        try {
            const dataLocal = await fetch(`https://ipapi.co/${ip}/json`);
            const responseLocal = await dataLocal.json();
            let city = responseLocal.city;
            let lon = responseLocal.longitude;
            let lat = responseLocal.latitude;

            if (lon === null || lat === null || city === null) {
                city = "Bethesda";
                lon = -77.1003;
                lat = 38.9807;
            }

            document.querySelector(".weather-city").textContent = city;
            getWeatherInfo(lat, lon);
        }
        catch (error) {
            console.log(error);
        }

    }
    catch (error) {
        console.log(error);
        document.querySelector(".weather-city").textContent = "Bethesda";
        const lon = -77.1003;
        const lat = 38.9807;
        getWeatherInfo(lat, lon);
    }
}

)();