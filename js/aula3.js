// //APRENDENDO MAIS SOBRE STRINGS(TEXTOS)

// // let primeiroTexto = "Estamos aprendendo a concatenar textos em uma variável";
// // let segundoTexto = ' ou em outros lugares';
// // let tipoBoleano = true;
// // let valorConcatenado = '';
// // primeiroTexto = primeiroTexto + ' ou em outros lugares'; // maneira 1
// // console.log(primeiroTexto);

// // primeiroTexto += ' ou em outros lugares'; // maneira 2
// // console.log(primeiroTexto);

// // //Maneira 3
// // valorConcatenado = `${primeiroTexto} ${segundoTexto}. Esse aqui é um tipo boleano ${tipoBoleano}`;
// // console.log(valorConcatenado);

// // DESCOBRINDO O TAMANHO DE UMA STRING

// let minhaEscola = 'Mach1 Escola';
// console.log(minhaEscola.length);

// //PEGANDO UM PEDACINHO DA MINHA STRING

// console.log(minhaEscola.slice(0,3));

// //DEIXAR TUDO MAIUSCULO

// console.log(minhaEscola.toUpperCase());

// // DEIXAR TUDO MINUSCULO

// console.log(minhaEscola.toLowerCase());

// // REPLACE

// console.log(minhaEscola.replace('Escola', 'curso'));

{ // Calculadora versão 1.1
    const mensagemCliente = "A soma dos números é: ";
    

    primeiroNumero = prompt('Digite o primeiro número');
    segundoNumero = prompt('Digite o segundo número')
    recebeResultado = parseInt(primeiroNumero) + parseInt(segundoNumero); //soma simples
    alert(mensagemCliente + recebeResultado);

    console.log(mensagemCliente + recebeResultado);
    recebeResultado = primeiroNumero - segundoNumero; //subtração
    alert(mensagemCliente + recebeResultado);

    recebeResultado = primeiroNumero * segundoNumero; //multiplicação
    alert(mensagemCliente + recebeResultado);
    console.log(mensagemCliente + recebeResultado);

    recebeResultado = primeiroNumero / segundoNumero; //divisão
    alert(mensagemCliente + recebeResultado);
    console.log(mensagemCliente + recebeResultado);

    recebeResultado = primeiroNumero / segundoNumero; //resto
    alert(mensagemCliente + recebeResultado);
    console.log(mensagemCliente + recebeResultado);
}