let listaDeNumerosSorteados = [];
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
let numeroLimite = 10;
let chutes = 0;
let numeroSecreto;
let chute = "";
const botaoReiniciar = document.getElementById('reiniciar')
function gerarNumeroAleatórioSemRepetir(){
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let tamanhoDaLista = listaDeNumerosSorteados.length;
    
    if(tamanhoDaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatório();
    } else{
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}
function verificarChute() {
    chutes++;
    chute = document.querySelector('input').value
    let palavraTentativa = 'tentativa'
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!');
        if(chutes > 1) {
            palavraTentativa = 'tentativas'
        }
        exibirTextoNaTela('p', `Você acertou o número secreto com ${chutes} ${palavraTentativa}`);
        botaoReiniciar.removeAttribute('disabled')
    } else {
        if(chute < numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é maior');
        }
        if(chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
        }
    }
    limparCampo()
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}
function init() {
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatório();
    chutes = 0;
    chute = 0;
    limparCampo();
    botaoReiniciar.setAttribute('disabled', true);
}
init();