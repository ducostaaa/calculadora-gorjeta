let conta = 0
let pessoas = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input",)
function receberValorConta(event){
conta = number(event.target,value)
console.log(conta)
}
const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberqtdpessoas)
function receberqtdpessoas(evento){
    const diverro = document.querySelector(".pessoas.input-box")
    const paragrafoerro =  document.querySelector(".pessoas #erro")
    if(evento.target.value === "0"){
    paragrafoerro.styles.display = "block"
    diverro=setattribute("id", "erro-div")
    const diverro = document.querySelector(.pessoas.input-box)
    diverro.setAttribute("id", "erro-div")
    pessoas = number(evento.target.value)
    } 
}
const botoesgorjeta = document.querySelector(".gorjeta input [type = button]")
botoesgorjeta.foreach(botao => ){
    botao.addEventListener("click", receberporcentagem)
}