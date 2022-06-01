/*
*/

document.querySelector(".important").setAttribute("title", "important")

let img = document.querySelectorAll("img"), i;
let imgImportant = document.querySelector(".important")

for (i = 0; i < img.length; ++i) {
   if (imgImportant){
       img.setAttribute("display", "none")
   }
}