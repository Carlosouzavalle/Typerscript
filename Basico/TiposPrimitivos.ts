/*
    Tipos primitivos em TypeScript
    - string
    - number
    - boolean
    - null
    - undefined
    - symbol
    - bigint
    - void (usado em funções que não retornam nada)
    - any (usado quando não se sabe o tipo da variável)
    - never (usado quando uma função nunca retorna, por exemplo, uma função que lança um erro)
*/

//==============================================================================================================================
// string
// let nome2: string = 'Carlos';
// console.log(nome2);


//==============================================================================================================================
// number
// ele é usado para representar números inteiros e de ponto flutuante
// let idade2: number = 30;
// console.log("sua idade é: " + idade2);


//==============================================================================================================================
// boolean
//  ele é usado para representar valores lógicos, verdadeiro ou falso

// let a = 2;
// if (a === 2) {
//     console.log("isso é verdade");
// } else {
//     console.log("isso é falso");
// }

// if e else são usados para controle de fluxo, mas não são tipos primitivos
// Não vamos entrar no topico agora

//==============================================================================================================================

// null
// ele é usado para representar a ausência intencional de um valor


// Você pode usar união de tipos (|) para dizer que a variável pode ser um tipo ou null:
// let nome: string | null = null;
// console.log(nome); // Saída: null
// não é legal usar ele diretamente

//==============================================================================================================================
// undefined 
// ele é usado para representar uma variável que foi declarada, mas não inicializada
// let nome: string | undefined;
// console.log(nome); // Saída: undefined

//==============================================================================================================================
// symbol
// ele é usado para criar identificadores únicos e imutáveis
// let simbolo: symbol = Symbol('descricao');
// console.log(simbolo); // Saída: Symbol(descricao)


// let simbolo1: symbol = Symbol('ID');
// let simbolo2: symbol = Symbol('ID');
// console.log(simbolo1 === simbolo2); // Saída: false
// utilizado em metaprogramação, como propriedades de objetos que não devem ser acessadas diretamente
//==============================================================================================================================

// bigint 
// ele é usado para representar números inteiros muito grandes, maiores que o limite do tipo number
// let numeroGrande: bigint = 1234567890123456789012345678901234567890n;
// console.log(numeroGrande); // Saída: 1234567890123456789012345678901234567890n

//==============================================================================================================================
// void
// ele é usado para indicar que uma função não retorna um valor
// function exibirMensagem(): void {
//     console.log("Olá, mundo!");
// }
// exibirMensagem(); // Saída: Olá, mundo!

//==============================================================================================================================

// any
// ele é usado quando você não sabe o tipo de uma variável ou quando ela pode ser de qualquer tipo
// let valor: any = "texto";
// console.log(valor); // Saída: texto
// valor = 42;
// console.log(valor); // Saída: 42
// // utilizar o tipo any pode ser perigoso, pois você perde a segurança de tipos do TypeScript

//==============================================================================================================================

// never
// ele é usado para indicar que uma função nunca retorna um valor, geralmente porque lança um erro ou entra em um loop infinito
// function erroInesperado(): never {
//     throw new Error("Erro inesperado");
// }
// erroInesperado(); // Lança um erro e nunca retorna