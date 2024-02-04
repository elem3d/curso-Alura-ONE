alert('Bem-vindo ao jogo do número secreto!');

let numeroSecreto = Math.floor(Math.random() * (0, 100));

let chute;

let tentativas = 0; 

let resultado = {
    texto1: document.querySelector('.container__texto-azul'),
    texto2: document.querySelector('.resultado'),
}

while(chute != numeroSecreto){
    tentativas++

    chute = prompt('Qual você acha que é o número secreto de 0 a 100?');

   if(chute > numeroSecreto) {
    alert('o número secreto é menor');
    } else if(chute < numeroSecreto) {
    alert('O número secreto é maior')
    } else if (chute == numeroSecreto) {
        break;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns! Você acertou com ${tentativas} ${palavraTentativa}`)