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

const getWeatherInfo = ()=> {

}


(async () => {
    try {
        const dataIP = await fetch("https://api.ipify.org?format=json");
        const responseIP = await dataIP.json();
        const ip = responseIP.ip;
       console.log("ip: ", ip)


        try {
            const dataLocal = await fetch(`http://ip-api.com/json/${ip}`);
            const responseLocal = await dataLocal.json();
           
            document.querySelector(".weather-city").textContent = responseLocal.city;
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