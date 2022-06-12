// add class in menu

const ulElement = document.querySelector("#primaryNav");
ulElement.addEventListener("click", (e)=> {
  
        // console.log(event.target.textContent)  
        if (e.target.tagName.localeCompare("li")) {

            e.target.classList.add("active");}
})

// function getEventTarget(e) {
//     e = e || window.event;
//     return e.target || e.srcElement; 
// }


// ulElement.onclick = function(event) {
//     let target = getEventTarget(event);
//     console.log(target.textContent);
// };