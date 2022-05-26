const temperature = document.querySelector(".temperature").innerHTML;
const windSpeed = document.querySelector(".wind-speed").innerHTML;
const windChill = document.querySelector(".wind-child");



let fahrenheit = (parseFloat(temperature) * 9/5 ) + 32;
let windMiles = parseFloat(windSpeed) / 1.69034

console.log(fahrenheit)
console.log(windMiles)

if(fahrenheit <= 50 && windMiles > 3){
    let f = 35.74 + 0.6215*fahrenheit - 35.75*windMiles**0.16 + 0.4275*fahrenheit*windMiles**0.16;
    windChill.innerHTML = `${f.toFixed(1)} °F`;
    console.log(f)
}
else {
    windChill.innerHTML = "N/A";
}
