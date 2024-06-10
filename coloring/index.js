const buttons = document.querySelectorAll(".button");
const body = document.body

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const cor = e.target.id
        body.style.backgroundColor = cor

    })

});

/* 
1 - Seleção de Elementos:
const buttons = document.querySelectorAll(".button");
- Aqui, estamos selecionando todos os elementos com a classe .button usando o 
método querySelectorAll.
- Esses elementos podem ser botões, links ou qualquer outro elemento com a classe .button.

2 - Seleção do Elemento <body>:
const body = document.body;
- Estamos selecionando o elemento <body> do documento HTML usando a propriedade 
document.body.

3 - Iteração sobre os Botões:
buttons.forEach(function (btn) { ... });
- Para cada elemento com a classe .button, estamos adicionando um ouvinte de evento.
- A função de callback é executada quando o botão é clicado.

4 - Lógica dentro do Event Listener:
- Quando um botão é clicado, a função de callback é acionada.
- e.target.id obtém o ID do botão que foi clicado.
- A cor do fundo do <body> é definida como a cor correspondente ao ID do botão.s
 */

