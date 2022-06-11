// Visits
let daysLastVisit = document.querySelector(".days-last-visit");


// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("last-visit"));

const milisecondsToDaysFactor = 1000 * 60 * 60 * 24;

// num of days from last visit
let days = Math.ceil((Date.now() - lastVisit) / milisecondsToDaysFactor);
console.log(days)

// determine if this is the first visit or display the number of visits.
if (numVisits != 0) {
	daysLastVisit.textContent = `It's been ${days} days since your last visit`;
} else {
	daysLastVisit.textContent = `This is your first visit!`;
}


// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("last-visit", Date.now());