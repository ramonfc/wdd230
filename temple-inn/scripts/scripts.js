function toggleMenu(){
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
year.innerHTML  = date.getFullYear();

const modified = document.querySelector("#modified");
modified.innerHTML  = document.lastModified;



// Banner
let day = date.getDay();

const closeBtn = document.querySelector("#close");
const banner = document.querySelector("#banner");

if (day === 1 || day === 2) {
	banner.style.display = "flex";
    banner.style.justifyContent = "space-evenly";
}

closeBtn.addEventListener("click", () => {
	banner.style.display = "none";
});