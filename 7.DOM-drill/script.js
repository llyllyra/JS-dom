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