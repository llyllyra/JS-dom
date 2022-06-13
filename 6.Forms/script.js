/*
*/
let inputNames = document.getElementById("firstname");
let spanFirstName = document.getElementById("display-firstname");

inputNames.addEventListener("keyup", () => {
    spanFirstName.innerHTML = inputNames.value;
})


let inputAge = document.getElementById('age')
let sectionHidden = document.getElementById('a-hard-truth')

inputAge.addEventListener("input", () => {
    (inputAge.value >= 18) ? (sectionHidden.style.visibility = "visible") : sectionHidden.style.visibility = "hidden";
});

let inputPwd = document.getElementById("pwd");
let inputPwdconfirm = document.getElementById("pwd-confirm");


inputPwd.addEventListener("input", () => {

    (inputPwd.value.length < 6) ?
        inputPwd.style.color = "red"
        : inputPwd.style.color = "green"
});

inputPwdconfirm.addEventListener("input", () => {
    if (inputPwd.value == inputPwdconfirm.value){
        inputPwdconfirm.style.color = "green"
        inputPwd.style.color = "green"
    }else{
        inputPwdconfirm.style.color = "red"
        inputPwd.style.color = "red";
    }
    
});

let toggleSelect = document.getElementById("toggle-darkmode");
let body = document.querySelector("body");

toggleSelect.addEventListener("change", () => {
    console.log(toggleSelect.value)
    switch (toggleSelect.value) {
        case "dark":
            body.style.backgroundColor = "black";
            body.style.color = "white"
            break
        case "light":
            body.style.backgroundColor = "white"
            body.style.color = "black"
            break
    }
}
)
