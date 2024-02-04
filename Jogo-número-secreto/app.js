function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
function gerarNumeroAleatório(){
    let numero = parseInt(Math.random() * 10 + 1);
    return numero;
}

let chutes = 0;
let numeroSecreto;

function verificarChute() {
    chutes++;
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', `Você acertou o número secreto com ${chutes} tentativas`);
    } else {
        exibirTextoNaTela('h1', `Tentativa ${chutes}`);

        if(chute < numeroSecreto) {
        exibirTextoNaTela('p', 'Você ainda não acertou o númeto secreto. Dica: maior');
        }
        if(chute > numeroSecreto) {
        exibirTextoNaTela('p', 'Você ainda não acertou o númeto secreto. Dica: menor');
        }
    }
}
function init() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
    numeroSecreto = gerarNumeroAleatório();
    chutes = 0;
}
init();