// To use with dates in footer:
date = new Date();
const year = document.querySelector("#currentYear");
year.innerHTML  = date.getFullYear()

const modified = document.querySelector("#modified");
modified.innerHTML  = document.lastModified


// To use with accordion in target page:
let acc = document.querySelectorAll(".accordion");
for (let i = 0; i < acc.length; i++) {    
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

