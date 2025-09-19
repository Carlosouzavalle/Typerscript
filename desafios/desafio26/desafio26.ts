const frase: string = "  amanda ama pedro";
const frase2 = frase.trim()

const primeiraOcorrencia = frase2.indexOf("a") + 1
const ultimaOcorrencia = frase2.lastIndexOf("a") + 1
//Usando o match
// g = global, i = ignore case
// const LetrA = frase.match(/a/gi);
// const qtd = LetrA ? LetrA.length : 0;
// console.log('A letra "A" aparece ' + qtd + ' vezes');


//usando o split 
// const qtd = frase.toLowerCase().split("a").length - 1;
// console.log('A letra "A" aparece ' + qtd + ' vezes');


//Usando o forEach
let contador = 0;
frase.split("").forEach(c => {
    if(c.toLowerCase() === "a") contador++;
});
console.log('A letra "A" aparece ' + contador + ' vezes');

console.log("A primeira ocorrencia da letra A acontece na posição " + primeiraOcorrencia)
console.log("A ultima ocorrencia da letra A acontece na posição " + ultimaOcorrencia)

