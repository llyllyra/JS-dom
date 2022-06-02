const _initTime = Date.now()
let displayedquare = document.querySelector(".displayedquare-wrapper")
let ListUl = document.querySelector("ul")
const actionSquares = document.querySelectorAll('.actionsquare')
displayedquare.classList.remove("displayedquare-wrapper")
displayedquare.classList.add("displayedsquare-wrapper")


const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {

  let time = getElapsedTime();
  let color = e.target.classList[1];
  let listeLi = document.createElement("li")
  let square = document.createElement("div")

  console.log(color)
  console.log(time)

  displayedquare.append(square)
  square.classList.add("displayedsquare", color)

  listeLi.innerHTML = `[${time}] Created a new ${color} square.`
  ListUl.append(listeLi)
}


for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}



document.addEventListener("keyup", event => {
  let time = getElapsedTime();
  if (event.isComposing || event.key === " ") {
    let listeLi = document.createElement("li");
    ListUl.append(listeLi)
    listeLi.innerHTML = `[${time}] Created a new space bar.`
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const color = `rgb(${r},${g},${b})`;
    document.body.style.background = color;
    return;
  }
  
  if (event.isComposing || event.key === "l") {
    let li = document.querySelectorAll("li")
    for (const iterator of li) {
      ListUl.removeChild(ListUl.firstElementChild)
    }
    
  }
  if (event.isComposing || event.key === "s") {
    let delDiv = document.querySelectorAll(".displayedsquare")
    for (const iterator of delDiv) {
      displayedquare.removeChild(displayedquare.firstElementChild)
    }
  }
})



const saycolor = (e)=>{
  
  let color = e.target.classList[1];
  return alert(color)
}
let squares = document.createElement("div.displayedsquare")
displayedquare.addEventListener("click", saycolor)