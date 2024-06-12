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

/*1 - const containerEl = document.querySelector(".conteiner");
  - Aqui, um elemento HTML com a classe .conteiner será adicionadodocument.querySelector(".conteiner").
  - O elemento selecionado será armazenado na variável containerEl.

2 - const careers = ["World!", "Front end nation", "Back end nation."];
  - Este é um array chamado careers que contém algumas profissões.

3 - Duas variáveis são declaradas:
  - careerIndex é inicializada com o valor zero.
  - characterIndex também é inicializada com o valor zero.

4 - updateText();
  - Chamamos a função updateText() para iniciar o processo de atualização do texto.

5 - function updateText() { ... }
  - Aqui está a definição da função updateText().
  - Dentro dessa função:
    characterIndex é incrementado.
    O conteúdo do elemento containerEl é atualizado com um título <h1> que exibe a profissão atual (com         base nos índices careerIndex e characterIndex).
    Se characterIndex atingir o comprimento da profissão atual, incrementamos careerIndex e redefinimos characterIndex para zero.
    Se careerIndex atingir o comprimento do array careers, reiniciamos careerIndex para zero.
    A função updateText() é chamada novamente após um atraso de 300 milissegundos usando setTimeout.
*/


