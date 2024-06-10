const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanElement = document.createElement("span");
    spanElement.style.left = xPos + "px";
    spanElement.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    bodyElement.appendChild(spanElement);
    setTimeout(() => { spanElement.remove() }, 3000);
});

/*
1 . Seleção do Elemento body:
const bodyElement = document.querySelector("body");
Aqui, estamos selecionando o elemento <body> do documento HTML usando o método querySelector. 
O seletor "body" indica que queremos selecionar o elemento <body>.

2 . Evento mousemove:
bodyElement.addEventListener("mousemove", (event) => { ... });
Estamos adicionando um ouvinte de evento ao elemento <body>. Especificamente, estamos ouvindo o 
evento mousemove, que é acionado quando o cursor do mouse se move sobre o elemento.

3 . Lógica dentro do Event Listener:
Quando o evento mousemove ocorre, a função de callback é executada.
event.offsetX e event.offsetY fornecem as coordenadas X e Y do cursor do mouse em relação ao elemento 
<body>.
- Um novo elemento <span> é criado dinamicamente.
- O <span> é posicionado nas coordenadas do cursor do mouse usando spanElement.style.left e spanElement.style.top.
- O tamanho do <span> é definido aleatoriamente com base em Math.random() * 100.
- O <span> é adicionado como filho do <body> usando bodyElement.appendChild(spanElement).
- Após 3 segundos (3000 milissegundos), o <span> é removido usando setTimeout(() => { spanElement.remove() }, 3000).
*/