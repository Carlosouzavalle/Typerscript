const NomePessoa: string = "Carlos Eduardo Valle";
const saudacao1: string = `muito prazer em te conhecer ${NomePessoa}`;
console.log(saudacao1)

const palavras2 = NomePessoa.split(/\s+/);
console.log(palavras2[0])
console.log(palavras2[palavras2.length - 1])