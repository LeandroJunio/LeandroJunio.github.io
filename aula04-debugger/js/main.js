let entradas = document.querySelectorAll('input');

let btnSomar = document.querySelector('#btnSomar');

let resposta = document.querySelector('.resposta');

let num1 = entradas[0];
let num2 = entradas[1];

function pegarNum1() {
    return num1.value;
}
function pegarNum2() {
    return num2.value;
}

function verificarEntradasVazias() {
    if(pegarNum1() === '' || pegarNum2() === ''){
        return true;
    }else{
        return false;
    }
}

function somar() {
    if(verificarEntradasVazias()){
        atualizaResposta();
    }else{
        atualizaResposta();
    }
}

btnSomar.addEventListener('click',somar);


//Atualizar o campo de resposta de acordo com a função
function atualizaResposta() {
    if(verificarEntradasVazias()){
        resposta.classList.remove('certa');
        resposta.classList.add('errada');
        //debugger;
        resposta.textContent = "Erro: Preencha os dois números!"
    }else{
        resposta.classList.remove('errada');
        resposta.classList.add('certa');
        let numero1 = pegarNum1();
        numero1 = parseFloat(numero1);//Convertendo para número Real
        let numero2 = pegarNum2();
        numero2 = parseFloat(numero2);//Convertendo para número Real
        let soma = numero1 + numero2;
        resposta.textContent = `${numero1} + ${numero2} = ${soma}`;
    }
 }
 
 