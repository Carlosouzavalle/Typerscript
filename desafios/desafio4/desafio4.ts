const DigiteAlgo: any = "sda";
const TipoDeDado = typeof DigiteAlgo;
console.log(`O valor digitado foi: ${TipoDeDado}`)

if (TipoDeDado === 'string') {
    const soEspaco = DigiteAlgo.trim();
    if (soEspaco.length === 0)
        console.log("Você não digitou nada, só espaços em branco");
    else {
        console.log(`O valor digitado foi: ${soEspaco}`);
    }
}

// trim => remove espaços em branco do início e do fim da string e retorna uma nova string sem modificar a string original.
const Enum = DigiteAlgo;
if (!isNaN(Number(Enum)))
    console.log(`O valor digitado foi: ${typeof Enum}`);


if(/^[a-z A-Z 0-9]+$/.test(DigiteAlgo)) {
    console.log(`O valor digitado é alfanumérico: ${ DigiteAlgo}`);
} 

// a instrução acima verifica se a string contém apenas caracteres alfanuméricos (letras e números) usando uma expressão regular. Se a string atender a essa condição, ela imprime o valor digitado.
/*
    ^\d+$ → só dígitos (números).
    ^[a-zA-Z]+$ → só letras.
    ^[a-zA-Z0-9]+$ → letras e/ou números (alfanumérico).
*/

if(/^[A-Z]+$/.test(DigiteAlgo)){
    console.log(`O valor digitado é maiúsculo: ${DigiteAlgo}`);
}
else if(/^[a-z]+$/.test(DigiteAlgo)){
    console.log(`O valor digitado é minúsculo: ${DigiteAlgo}`);
}