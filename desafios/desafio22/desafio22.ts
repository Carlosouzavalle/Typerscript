// const boneCompleto = "Carlos Eduardo";
// const nomeMaior = boneCompleto.toUpperCase();
// const nomeMenor = boneCompleto.toLowerCase();
// const nomeTamanho = boneCompleto.length;
// //const PrimeiroNome = boneCompleto.split(" ");
// const PrimeiroNome = boneCompleto.split(" ")[0];
// //const separado = PrimeiroNome

// console.log("Seu nome em maiusculo fica " + nomeMaior)
// console.log("Seu nome em minusculo fica " + nomeMenor)
// console.log("seu nome tem " + nomeTamanho + " letras")
// //console.log(separado[0])
// console.log("Seu Primeiro nome é " + PrimeiroNome + " e seu nome tem " + PrimeiroNome.length + " letras")



const boneCompleto = "Carlos Eduardo";
const nomeMaior = boneCompleto.toUpperCase();
const nomeMenor = boneCompleto.toLowerCase();
const nomeTamanho = boneCompleto.length;

const [PrimeiroNome, SegundoNome] = boneCompleto.split(" "); // Destruturing 


console.log(PrimeiroNome)
console.log(SegundoNome)

console.log("Seu nome em maiusculo fica " + nomeMaior)
console.log("Seu nome em minusculo fica " + nomeMenor)
console.log("seu nome tem " + nomeTamanho + " letras")
console.log("Seu Primeiro nome é " + PrimeiroNome + " e seu nome tem " + PrimeiroNome.length + " letras")
console.log(SegundoNome)