// COMANDOS DE SAÍDA

alert('Aulão do Cleyton!');
console.log('Testando console');
prompt('Digite seu nome: ');

// DECLARAÇÃO DE VARIÁVEIS
var variavel = 'Uma variavel é um espaço na memória';
let varavel2 = 'Utilizada para guardar uma informação';
const variavel3 = 'Essas são as formas que podemos declarar';

// ESCOPO 1

{ //Calculadora 1 soma
    "use strict";
    const mensagemBonita = "Sucesso, vc somou 2 números!";
    let receberPrimeiroNumero = 0; //INICIALIZO COMO NUMERO
    let recebeSegundoNumero = 0; //INICIALIZO COMO NUMERO

    receberPrimeiroNumero = prompt('Digite o primeiro número: ');
    recebeSegundoNumero = prompt('Digite o segundo número: ')
    console.log(mensagemBonita);
    console.log(parseInt(receberPrimeiroNumero) + parseInt(recebeSegundoNumero));
}

// ESCOPO 2

{// Calculadora 2 subtração
    // Iniciando variáveis
    const mensagemUsuario = 'Seu resultado é: '
    let primeiroNumeroSubtracao = 0;
    let segundoNumeroSubtracao = 0;
    let resultadoSubtracao = 0;

    primeiroNumeroSubtracao = 10;
    segundoNumeroSubtracao = 5;
    resultadoSubtracao = primeiroNumeroSubtracao - segundoNumeroSubtracao;
    alert(mensagemUsuario +  resultadoSubtracao);
}

