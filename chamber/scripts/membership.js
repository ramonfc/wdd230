const dataFile = "./data/data.json";



const main = async () => {
    const response = await fetch(dataFile);
    const data = await response.json();

    let companiesPremium = data["companies"].filter(company => company.membership === "Silver" || company.membership === "Gold");

    console.log(companiesPremium);

    let selectedIndexes = generateRandomArray(0, companiesPremium.length - 1);
    console.log(selectedIndexes)

    let selectedCompanies = selectedIndexes.map(pos => companiesPremium[pos]);
    console.log(selectedCompanies);

    displaycompanies(selectedCompanies);

}

main();

const generateRandomArray = (min, max, length = 3) => {
    let values = [];
    for (let i = 0; i < length; i++) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        let check = values.includes(number);

        if (!check) {
            values.push(number);
        }
        else {
            while (check) {
                number = Math.floor(Math.random() * (max - min + 1)) + min;
                check = values.includes(number);
                if (!check) {
                    values.push(number);
                }
            }
        }

    }
    return values;
}



function displaycompanies(companies) {
    // Create elements to add to the document
    companies.forEach((company, index) => {


        let card = document.createElement("div");
        let h2 = document.createElement("h2");
        let picture = document.createElement("picture");
        let logo = document.createElement("img");
        let message = document.createElement("p");
        let website = document.createElement("p");
        let phone = document.createElement("p");

        

        h2.textContent = `${company.name}`;

        logo.setAttribute("src", company.image);
        logo.setAttribute("alt", `logo of ${company.name}`);
        logo.setAttribute("loading", "lazy");

        picture.appendChild(logo);

        message.textContent = `${company.message}`;
        website.innerHTML = `<a href="${company.url}">${company.url}</a>`;
        phone.textContent = `${company.phone}`;
        


        card.setAttribute("class", `spotlight-${index + 1}`);

        // Add/append the section(card) with the h2 element
        card.appendChild(h2);
        card.appendChild(picture);
        card.appendChild(message);
        card.appendChild(document.createElement("hr"));
        card.appendChild(website);
        card.appendChild(phone);

        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector("div.spotlight").appendChild(card);


    });


}
