function calcularIMC(altura, peso) {
    let imc = peso/(altura*altura);
    return imc;
}

function dolarConverter(valorDolar) {
    let valorReal = valorDolar * 4.8;
    return valorReal.toFixed(2);
}

function calcularArea (largura, altura) {
    let area = largura * altura;
    let perimetro = 2 * (altura + largura);
    console.log(area, perimetro);
}

function calcularDimensoesCirculo(raio){
    const pi = 3.14;
    let area = pi * (raio*raio);
    let perimetro = 2 * pi * raio;
    console.log(area, perimetro)
}

function tabuada(numero){
    for(let i = 0; i < 10; i++) {
        let resultado = i * numero;
        console.log(`${i} x ${numero} = ${resultado}`)
    }
}