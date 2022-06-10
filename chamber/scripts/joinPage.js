// Dealing with date and time for hidden input:
const hiddenDateTime = document.querySelector("#date-time");
const dateJoin = new Date();
const editedDate = dateJoin.toString().split("G")[0].trim();
hiddenDateTime.setAttribute("value", editedDate);


// customizing message for invalid pattern

const businessPosition= document.querySelector("#businessPosition");

businessPosition.addEventListener("input", function (event) {
  if (businessPosition.validity.patternMismatch) {
    businessPosition.setCustomValidity("Use only alpha characters, hyphens, and spaces with a minimum of seven characters");
    businessPosition.reportValidity();
  } else {
    businessPosition.setCustomValidity("");
  }
})