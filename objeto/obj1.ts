/*
O que é um Objeto?
Um objeto é uma estrutura que armazena pares de chave e valor, representando algo do mundo real.
Por exemplo, uma pessoa, um carro ou um produto podem ser representados como objetos.
Um objeto em programação é como representar algo do mundo real com suas características (propriedades) e ações (métodos).
*/

// const pessoa1 = {
//     nome: "carlos",
//     idade: 27,
//     profissao: "programador"
// }

//console.log(pessoa1) // acessando o objeto completo
//console.log(pessoa1.nome) // podemos acessar elementos separadamente

// nome, idade e profissao são chaves (propriedades) e os outros são valores 


//=====================================================================================================================================================

/*
    Indo um pouco mais a fundo vamos pegar a estrutura anterior de exemplo
*/


// type pessoa1 = {
//     nome: string;
//     idade: number;
//     profissao: string;
// }

// const funcionario1: pessoa1 = {
//     nome: "Ana",
//     idade: 30,
//     profissao: "medica"
// }

// const funcionario2: pessoa1 = {
//     nome: "Maria",
//     idade: 22,
//     profissao: "assistente"
// }

// console.log(funcionario1)
// console.log(funcionario2)

/*
🔹 O que é o type?
O type serve para criar um tipo personalizado no TypeScript.
Pense nele como um molde ou modelo que define como algo deve ser estruturado.
💡 É como dizer:
“Olha TypeScript, toda vez que eu falar Pessoa, quero que você entenda que tem nome, idade e profissão.”
A maneira acima é um codigo reutilizavel 

*/


//=================================================================================================================================================================


/*
    Seguindo a ideia do exemplo anterior podemos utilizar interfaces 
    💡 type e interface são bem parecidos, mas interface é mais usada para definir formas de objetos e pode ser expandida (herdada)
*/


// interface usuario2 {
//     nome: string;
//     idade: number;
//     profissao: string;
// }


// const user2: usuario2 = {
//     nome: "Maria",
//     idade: 22,
//     profissao: "programadora"
// }

// console.log(user2)

/*
Uma interface é um molde, um contrato, ou um modelo que diz como um objeto deve ser.
Em outras palavras:
A interface serve pra dizer quais propriedades e tipos um objeto precisa ter.
*/

//=================================================================================================================================================================


