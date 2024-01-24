let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function onButtonConsoleClick() {
    console.log('O botão foi clicado');
}

function onButtonAlertClick() {
    alert('Eu amo JS');
}

function onButtonPromptClick() {
    let cidade = prompt('Digite o nome de uma cidade Brasileira');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function onButtonSomaClick() {
    let numero1 = prompt('digite um número');
    let numero2 = prompt('digite um número novamente');
    let soma = numero1 + numero2;
    alert(`A soma dos números digitados é: ${soma}`);
}