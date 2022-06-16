const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid-directory");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid-directory");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid-directory");
}




//From  Prophets activity:

const requestURL = "data/data.json";
const cards = document.querySelector(".grid-directory");

fetch(requestURL)
  .then(function (response) {  
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject["companies"];
    companies.forEach(displayCompanies);
  });


  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let address = document.createElement("p");
    let logo = document.createElement("img");
    let phone = document.createElement("p");
    let url = document.createElement("a");
  
    // Change the textContent property of the address element to contain the company's full name
    address.textContent = company.address;
    
    phone.textContent = company.phone;
   
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
    logo.setAttribute("src", company.image);
    logo.setAttribute("alt", `Logo of ${company.name}`);
    logo.setAttribute("loading", "lazy");


    url.setAttribute("href", company.url);
    url.setAttribute("target", "_blank");
    url.textContent = company.url;
  
    // Add/append the section(card) with the address element
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("article.grid-directory").appendChild(card);
  }