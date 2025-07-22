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
var simbolo = Symbol('descricao');
console.log(simbolo); // Saída: Symbol(descricao)
