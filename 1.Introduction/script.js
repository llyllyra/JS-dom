/*
*/
const body = document.querySelector("body");
let docTitle = document.title
console.log(docTitle);
document.querySelector("title").innerHTML="Modifying the DOM";

for (let children of body.children){
    console.log(children);
}

let randomBGC = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const color = `rgb(${r},${g},${b})`;
    document.body.style.background = color;
}

setInterval(randomBGC, 2000)


