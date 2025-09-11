// Existem 3 tipos ou 3 maneiras de declarar variáveis em TypeScript
// o mesmo vale para JavaScript

// let = maneira moderna de declarar variáveis
let nome = 'carlos';
console.log(nome);
// variaveis em ts podem ser inferido com tipo
let importante: string = 'isso é importante'; 

// const = valor constante, não pode ser reatribuído
const dataDeNascimento = '01/01/1990';

// var = não utilizar mais, é uma maneira antiga de declarar variáveis
var idade = 30;
console.log(idade);

//OBS: variaveis não podem começar com números, mas podem conter números e caracteres especiais como _ e $




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


// let sla: unknown = "qualquer coisa"; // tipo desconhecido, usado quando não se sabe o tipo da variável
// sla.toFixed(2); // erro, pois o tipo é desconhecido
// console.log( sla);

let sla: any = "qualquer coisa"; // tipo desconhecido, usado quando não se sabe o tipo da variável
sla.toFixed(2); // erro, pois o tipo é desconhecido
console.log(sla);