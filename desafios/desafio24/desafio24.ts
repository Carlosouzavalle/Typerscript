const nomeCidade: string = "    sAnto   ";

const cidade = nomeCidade.replace(/[^A-Za-z]+/g, "")

const cidadeNormal = cidade
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    //.trim(); 

if (cidadeNormal === "santo") 
{
    console.log("Verdadeiro")
} else {
    console.log("falso")
}

console.log(cidade)

/*

Trim vai remover espaços
lowerCase vai por tudo pra minusculo
normalized(NFD) separa letras de acentos
regex flag g para global
regex flag $ para o final
*/

