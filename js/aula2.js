//TIPOS DE DADOS

// let tipoString = 'Uma string';
// let tipoNumber = 10;
// let tipoBoolean = true;
// let tipoNull = null;
// let tipoUndefined;

let primeiroNumero = 0;
let segundoNumero = 0;
let recebeResultado = 0;
let formula = 10 + 10 - 5 * (10-5); //VARIAVEL RECEBENDO UMA FORMULA COMPLEXA


{ // Calculadora versão 1
    const mensagemSoma = "A soma dos números é: ";
    const mensagemSubtracao = "A subtracao dos números é: "
    const mensagemMultiplicacao = "A multiplicação dos números é: "
    const mensagemDivisao = "A divisão dos números é: "
    const mensagemResto = "O resto da divisão é: "

    primeiroNumero = prompt('Digite o primeiro número');
    segundoNumero = prompt('Digite o segundo número')
    recebeResultado = parseInt(primeiroNumero) + parseInt(segundoNumero); //soma simples
    alert(mensagemSoma + recebeResultado);

    console.log(mensagemSoma + recebeResultado);
    recebeResultado = primeiroNumero - segundoNumero; //subtração
    alert(mensagemSubtracao + recebeResultado);

    recebeResultado = primeiroNumero * segundoNumero; //multiplicação
    alert(mensagemMultiplicacao + recebeResultado);
    console.log(mensagemMultiplicacao + recebeResultado);

    recebeResultado = primeiroNumero / segundoNumero; //divisão
    alert(mensagemDivisao + recebeResultado);
    console.log(mensagemDivisao + recebeResultado);

    recebeResultado = primeiroNumero / segundoNumero; //divisão
    alert(mensagemResto + recebeResultado);
    console.log(mensagemResto + recebeResultado);
}

// INCREMENTO E DECREMENTO
 let numeroDecremento = 10;
 let numeroIncremento = 10;

 numeroDecremento = numeroDecremento--;
 numeroIncremento = numeroIncremento++;

 // DECREMENTO
 console.log(numeroDecremento--);
 console.log(numeroDecremento--);
 console.log(numeroDecremento--);
 console.log(numeroDecremento--);
 console.log(numeroDecremento--);
 // INCREMENTO
 console.log(numeroIncremento++);
 console.log(numeroIncremento++);
 console.log(numeroIncremento++);
 console.log(numeroIncremento++);
 console.log(numeroIncremento++);