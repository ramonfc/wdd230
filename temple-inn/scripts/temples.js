

const requestURL = "data/selectedTemples.json";


/**
 * Given the closure date, return a short version. Ex: 
 * Given: "Monday, 20 March 2023 - Monday, 3 April 2023"
 * returns: "Mon Mar 20 2023 - Mon Apr 03 2023"
 * Given: "Monday, 3 April 2023"
 * returns: Mon Apr 03 2023
 * @param {String} date input date
 * @returns {String} the date in short version
 */
 const formatDates = (date) => {
    const dateList = date.split(" - ");  
    const modified = dateList.map(element => {
       return (new Date(element)).toDateString();
    });
    return modified.join(" - ");
}


const formatDates2 = (date)=> {
    const dateList = date.split(" - ");  
      const modified = dateList.map(element => {
        let createdDate = new Date(element);
        let day = createdDate.toDateString().split(" ")[0];
        let editedDate = createdDate.toISOString().split("T")[0];
        let dateToSend = `${day} ${editedDate}`;
        return dateToSend;
      });
      return modified.join(" - ");
  }


const getData = async (url) => {
    const response = await fetch(url);
    const result_1 = await response.json();
    return result_1;
}


const showTemple = (temple, index) => {  
    const templeMain = document.querySelector(".temples-page");

        const templeDiv = document.createElement("div");
        templeDiv.setAttribute("class", "temple");

        const templeName = document.createElement("h2");
        templeName.textContent = temple.name;

        const templePicture = document.createElement("picture");
        const templeImage = document.createElement("img");
        templeImage.setAttribute("src", temple.image);
        templeImage.setAttribute("alt", temple.name);
        templeImage.setAttribute("loading", "lazy");
        templePicture.appendChild(templeImage);


        const templeAddress = document.createElement("div");
        templeAddress.classList.add("address");
        const templeAddressH3 = document.createElement("h3");
        templeAddressH3.textContent = "Address";
        templeAddress.appendChild(templeAddressH3);
        const address = temple.location;
        address.forEach(element => {
            const p = document.createElement("p");
            p.textContent = element;
            templeAddress.appendChild(p);
        });

        const templeTelephone = document.createElement("div");
        templeTelephone.classList.add("telephone");
        const templeTelephoneH3 = document.createElement("h3");
        templeTelephoneH3.textContent = "Telephone";
        const templeTelephoneP = document.createElement("p");
        templeTelephoneP.textContent = temple.phone;
        templeTelephone.append(templeTelephoneH3, templeTelephoneP);

        const templeEmail = document.createElement("div");
        templeEmail.classList.add("email");
        const templeEmailH3 = document.createElement("h3");
        templeEmailH3.textContent = "Email";
        const templeEmailP = document.createElement("p");
        if(temple.email !== null){
            templeEmailP.textContent = temple.email;
        }else {            
            templeEmailP.innerHTML = `Visit the <a href= ${temple.url} target= "_blank">temple site</a>`;
        }        
        templeEmail.append(templeEmailH3, templeEmailP);

    
        const templeServices = document.createElement("div");
        templeServices.classList.add("services");
        const templeServicesH3 = document.createElement("h3");
        templeServicesH3.textContent = "Services";
        templeServices.appendChild(templeServicesH3);
        const services = temple.services;
        services.forEach(service => {
            const p = document.createElement("p");
            p.textContent = service;
            templeServices.appendChild(p);
        });


        const templeHistory = document.createElement("div");
        templeHistory.classList.add("history");
        const templeHistoryH3 = document.createElement("h3");
        templeHistoryH3.textContent = "History";
        templeHistory.appendChild(templeHistoryH3);
        const history = temple.history;
        history.forEach(element => {
            const p = document.createElement("p");
            p.innerHTML = `<strong>${element[0]}</strong>: ${element[1]}`;
            templeHistory.appendChild(p);
        });

        const ordSchedule = document.createElement("div");
        ordSchedule.classList.add("ordinance-schedule");
        const ordScheduleH3 = document.createElement("h3");
        ordScheduleH3.textContent = "Ordinance Schedule";
        ordSchedule.appendChild(ordScheduleH3);
        const ordScheduleP = document.createElement("p");
        if(temple.ordinance_schedule !== null){
            ordScheduleP.textContent = temple.ordinance_schedule;
        }else {            
            ordScheduleP.innerHTML = `Visit the <a href= ${temple.url} target= "_blank">temple site</a>`;
        }        
        ordSchedule.append(ordScheduleH3, ordScheduleP);


        const sessionSchedule = document.createElement("div");
        sessionSchedule.classList.add("session-schedule");
        const sessionScheduleH3 = document.createElement("h3");
        sessionScheduleH3.textContent = "Session Schedule";
        sessionSchedule.appendChild(sessionScheduleH3);
        const sessionScheduleP = document.createElement("p");
        if(temple.session_schedule !== null){
            sessionScheduleP.textContent = temple.session_schedule;
        }else {            
            sessionScheduleP.innerHTML = `Visit the <a href= ${temple.url} target= "_blank">temple site</a>`;
        }        
        sessionSchedule.append(sessionScheduleH3, sessionScheduleP);


        const templeClosures = document.createElement("div");
        templeClosures.classList.add("closures");
        const templeClosuresH3 = document.createElement("h3");
        templeClosuresH3.textContent = "Temple Closures";
        templeClosures.appendChild(templeClosuresH3);
        const divDates = document.createElement("div");
        divDates.classList.add("dates");

        const closureInfo = temple.closure_schedule;
        const datesClosure = closureInfo.map(date => Object.entries(date)[0]);
        datesClosure.forEach(date => {
            const div = document.createElement("div");
            const p = document.createElement("p");
            p.innerHTML = `${date[0]}`;
            
            const ul = document.createElement("ul");
            const dates = date[1];
            dates.forEach(d=> {
                const li = document.createElement("li");
                li.textContent = `${formatDates(d)}`;

                ul.appendChild(li);
            })

            div.appendChild(p);
            div.appendChild(ul);
            divDates.appendChild(div);
            templeClosures.appendChild(divDates);
        })

     
        const likeTemple = document.createElement("div");
        likeTemple.classList.add("like");



    const heartEmpty = document.createElement("img");
    const heartFill = document.createElement("img");
    const heartBtn = document.createElement("button");

    // heart.setAttribute("id", `pos_${index}`);
    // heart.src = "images/temples/empty-heart-11110.png";
    // heart.alt = `${temple.name}`;
    // heart.classList.toggle("empty");

    
    // var toggle = false;

    // heart.onclick = ()=> {
    //     if (toggle === true) {
    //         document.querySelector(`#pos_${index}`).src  = 'images/temples/empty-heart-21110.png';

    //     } else {
    //        document.querySelector(`#pos_${index}`).src = 'images/temples/empty-heart-11110.png';
    //     }
    //     toggle = !toggle; 
    // }
    // likeTemple.appendChild(heart);




    heartEmpty.setAttribute("src", "images/temples/empty-heart-11110b.png");
    heartEmpty.setAttribute("alt", `${temple.name}`);

    heartFill.setAttribute("src", "images/temples/empty-heart-21110.png");
    heartFill.setAttribute("alt", `${temple.name}`);

    heartBtn.setAttribute("id", `${index}`)
    heartBtn.appendChild(heartEmpty);
    heartBtn.appendChild(heartFill);  
    heartBtn.setAttribute("onclick", "selectHeart(this)");

   
   const local =  getLocalStorage(index);
   if(local){
    heartBtn.classList.toggle("selected");    
   }

   
      likeTemple.appendChild(heartBtn);

        templeDiv.append(templeName, templePicture, templeAddress, templeTelephone, templeEmail, 
            templeServices, templeHistory, ordSchedule, sessionSchedule, templeClosures, likeTemple);
        console.log(templeDiv);

    
        templeMain.appendChild(templeDiv);
}


const getLocalStorage = (pos) => {
    const value = localStorage.getItem(`temple_${pos}`);
    return value
}
const selectHeart = (item)=> {
    item.classList.toggle("selected");

    if(item.className == "selected"){
       localStorage.setItem(`temple_${item.id}`, item.id); 
    }
    else{
        localStorage.removeItem(`temple_${item.id}`);
    }
}

(async () => {
    const data = await getData(requestURL);
    console.log(data);
    const temples = data.templeList;
    temples.forEach(showTemple);
})();