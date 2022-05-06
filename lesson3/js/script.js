date = new Date();
const year = document.querySelector("#currentYear");
year.innerHTML  = date.getFullYear()

const modified = document.querySelector("#modified");
modified.innerHTML  = document.lastModified