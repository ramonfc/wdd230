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



// Banner

const closeBtn = document.querySelector("#close");
const banner = document.querySelector("#banner");

banner.style.display = "flex";
banner.style.justifyContent = "space-evenly";

closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
});


// Curent weather:

const getWeatherInfo = async (lat, lon)=> {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=02784d30f1ae2ee62ed167493d7533e9&units=metric&exclude=minutely,hourly`);
    const response = await data.json();
    console.log(response)

    document.querySelector(".temperature").textContent = response.current.temp;
    document.querySelector(".currently").textContent = response.current.weather[0].description;
    document.querySelector(".humidity").textContent = response.current.humidity;
}   


(async () => {
    try {
        const dataIP = await fetch("https://api.ipify.org?format=json");
        const responseIP = await dataIP.json();
        const ip = responseIP.ip;       


        try {
            const dataLocal = await fetch(`https://ipapi.co/${ip}/json`);
            const responseLocal = await dataLocal.json();
            const city = responseLocal.city;
            const lon = responseLocal.longitude;
            const lat = responseLocal.latitude;
           
            document.querySelector(".weather-city").textContent = city;
            getWeatherInfo(lat, lon);
            // document.querySelector("#lat").textContent = responseLocal.lat;
            // document.querySelector("#lon").textContent = responseLocal.lon;

        }
        catch (error) {
            console.log(error);
        }

    }
    catch (error) {
        console.log(error);
        document.querySelector(".weather-city").textContent = "Bethesda";

        
    }
}

)();