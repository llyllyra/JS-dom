/*
*/

let importants = document.querySelectorAll(".important");
let important = document.querySelector(".important");

for (important of importants){
    important.setAttribute("title", "This is an important item")
}

let img = document.querySelectorAll("img"), i;
let imgImportant = document.querySelector("img.important")

for (img of img) {
    img.style.display = "none"
   if (imgImportant){
       imgImportant.style.display = "block"
   }
}

const image = document.querySelectorAll("img");
image.forEach((item) => {
    if (item.classList != "important") {
        item.style.display = "none";
    }
});
//
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (item) {
    // console.log(item.innerHTML);
    // console.log(item.classList);
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const colorRandom = `rgb(${r},${g},${b})`;
    if (item.classList != "important") item.style.color = colorRandom;
});