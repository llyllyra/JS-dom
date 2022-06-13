let list = document.querySelector("ul");
let listMovie = list.childNodes;
listMovie.forEach((element) => {
    // fast and furious en premier
    if (element.textContent === "Fast and Furious") {
        element.classList.add("important");
        let fastAndFurious = element;
        list.replaceChild(fastAndFurious, list.firstChild)
    }

    // alert quand on clique 
    element.addEventListener("click", () => {
        if (element.classList == 'important') {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        }
        else {
            alert(element.textContent)
        }
    });
});

//liste déroulante
let divButton = document.createElement("div")
let select = document.createElement("select");
document.body.insertBefore(divButton, list)
divButton.appendChild(select)
let arraySelect = ["Important franchises","Normal franchises"];
for (let i = 0; i < arraySelect.length; i++) {
    let option = document.createElement("option");
    option.value = arraySelect[i];
    option.text = arraySelect[i];
    select.appendChild(option);
}
let li = document.querySelectorAll("li");

li.forEach((li)=>{
    if(li.classList != 'important'){
        li.style.visibility = 'hidden'
    }
})
select.addEventListener("change", function () {
    if (select.value == "Important franchises") {
        li.forEach((li)=>{
            if(li.classList != 'important'){
                li.style.visibility = 'hidden'
            }
        })
    } else {
        li.forEach((li) => {
            li.style.visibility = "visible";
            
        });
    }
});


let duplicate = true;
document.body.addEventListener("keyup", event => {
    if (event.key === "r") {
        for (i = list.children.length; i >= 0; i--) {
            list.appendChild(list.children[Math.random() * i | 1]);
        }
        
    }
    if (event.key === "d" && duplicate){
        let firstChild = list.firstElementChild;
        firstChildClone = firstChild.cloneNode(true);
        list.insertBefore(firstChildClone, firstChild);
    }

    
});

function remove(a, b) {
    a.isEqualNode(b) ? b.remove() : null;
}

remove(list.children[2], list.children[4]);
remove(list.children[3], list.children[9]);
console.log(list.children);


