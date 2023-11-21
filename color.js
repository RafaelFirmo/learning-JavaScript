

const buttons = document.querySelectorAll(".button");
const body = document.body

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
    const cor = e.target.id
    body.style.backgroundColor = cor
        
    })
    
});

// console.log(e.target.id);  para teste no console navegador