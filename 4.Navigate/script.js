/*
*/
const list = document.querySelector("ol");
const firstChild = list.firstChild;
const lastChild= list.lastElementChild;
list.insertBefore(lastChild, firstChild);

let main = document.querySelector("main");
let secondSection = main.children[0].nextElementSibling
let thirdSection = secondSection.nextElementSibling

let titleSecondSection = secondSection.querySelector("h2")
let titleThirdSection = thirdSection.querySelector("h2")

let p2 = secondSection.querySelector("p")
let p3 = thirdSection.querySelector("div")

secondSection.insertBefore(secondSection.appendChild(titleThirdSection), p2)

thirdSection.insertBefore(thirdSection.appendChild(titleSecondSection), p3)

thirdSection.remove()
