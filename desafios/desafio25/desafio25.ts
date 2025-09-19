const NomeDaPessoa: string = " carlos da Silva";

const modificado = NomeDaPessoa.replace(/[^a-z A-Z]+/g, "");

const NomeDaPessoaModificado = modificado
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()


// com o includes
// if (NomeDaPessoaModificado.includes("silva")) {
//     console.log("Seu nome tem Silva");
// } else {
//     console.log("Falso");
// }


// usando regex 
// O \b garante que só bate quando é a palavra inteira "silva", não "silvano".
// if(/\bsilva\b/.test(NomeDaPessoaModificado)) {
//     console.log("Seu nome tem Silva");
// } else {
//     console.log("Falso");
// }


//Usando split + some
const palavras = NomeDaPessoaModificado.split(/\s+/);

if(palavras.some(p => p === "silva")) {
        console.log("Seu nome tem Silva")
} else {
    console.log("não tem silva")
} 

/*
O método .some() é de arrays em JavaScript.
Ele varre o array e retorna true se pelo menos 1 elemento satisfizer a condição que você passar.


/.../ → define que é uma regex.
\s → representa qualquer espaço em branco (pode ser espaço comum, tab, quebra de linha etc).
+ → significa "um ou mais".
Então \s+ significa “um ou mais espaços em branco”.
NomeDaPessoaModificado.split(/\s+/);
Estamos dizendo: quebre a string em um array, sempre que houver um ou mais espaços (ou tabs, ou quebras de linha).

*/