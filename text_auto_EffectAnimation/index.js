const containerEl = document.querySelector(".conteiner");

const careers = ["World!", "Front end nation", "Back end nation."];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `
    <h1>Hello ${careers[careerIndex].slice(1, 1)}
    ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 300);
};

