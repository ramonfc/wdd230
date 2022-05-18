const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", ()=> {
    if(input.value != ""){
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");

        li.appendChild(document.createTextNode(input.value));       
        
        deleteBtn.innerHTML = '&#10060;';
        li.appendChild(deleteBtn);

        list.appendChild(li);

        deleteBtn.addEventListener("click", ()=> {
            list.removeChild(li);
        });

        input.focus();
        input.value = "";
    }
});