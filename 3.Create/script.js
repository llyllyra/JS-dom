/*
*/

let learner = [
    "Melih",
    "Dylan",
    "Semih",
    "Marlène",
    "Louis",
    "Olivier",
    "Henri",
    "Mehdi",
    "Lydia",
    "Steeve",
    "Tanguy",
    "Anaïs",
    "Mariya",
    "Nicolas",
    "Latifa",
    "Arthur",
    "Duc",
    "Dorian",
    "Quentin",
    "Antoine",
    "Miguel",
    "Kevin",
    "Sébastien"
];

const randomGenerator = (n) => {
    return Math.floor(Math.random() * n)
}
function randomized(learner) {
    let number = learner.length, t
    const newLearner = learner
    while (number != 0) {
        let randomIndex = randomGenerator(number--);
        t = newLearner[number];
        newLearner[number] = newLearner[randomIndex]
        newLearner[randomIndex] = t

    }
    return newLearner
}


let addSection = () => {
    let random = randomized(learner), i
    let newSection = document.createElement("section");
    const article = document.querySelector("article")
    for (i = 0; i < random.length; i++) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255); 
        const color = `rgb(${r},${g},${b})`;

        article.appendChild(newSection, article);
        let paragraphe = document.createElement("p");
        let peopleSection = document.createTextNode(random[i]);
        newSection.appendChild(paragraphe);
        paragraphe.appendChild(peopleSection);
        paragraphe.style.background = color;
        r < 150 && g < 150
            ?(paragraphe.style.color = "white")
            : (paragraphe.style.color = "black");
    }
}
addSection()