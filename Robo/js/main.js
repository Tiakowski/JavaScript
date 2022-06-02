
const seletor = document.querySelectorAll("[data-controle]")
seletor.forEach(( elemento) => {
    elemento.addEventListener("click",(evento) => {
        ManipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        console.log(elemento)
    })
})

function ManipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]")

    if (operacao == "+"){
        if (parseInt(peca.value) < 8){
            peca.value++
            }
    } else {
        if (parseInt(peca.value) >= 1){
            peca.value--
            }
    }
}