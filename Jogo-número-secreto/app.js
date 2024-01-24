function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
function gerarNumeroAleatório(){
    parseInt(Math.random() * 10 + 1);
}
function init() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
    let numeroSecreto = gerarNumeroAleatório();
    let chutes = 0;

    function verificarChute() {
        chutes++;
        let chute = document.querySelector('input').value
        if(chute == numeroSecreto){
            alert(`Parabéns! Você acertou o número secreto com ${chutes} tentativas`);
        } else {
            alert('Você ainda não acertou o númeto secreto. Tente novamente.');
        }
    }
}
init();