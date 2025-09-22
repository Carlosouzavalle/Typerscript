const MeuValor: number = 2;
function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const sorteado = randomInt(1, 5)

if(sorteado === MeuValor) {
    console.log(`parabens voce acertou o numero o numero foi ${sorteado}`)
} else {
    console.log(`mais sorte da proxima vez o numero foi ${sorteado}`)
}
/*
max - min + 1 → define quantos números inteiros cabem no intervalo.
Exemplo: min=1, max=5 → números possíveis = [1,2,3,4,5] → 5 valores.
Por isso o +1.
Se fosse só (max - min), daria 4 (e você nunca chegaria no max).
Math.random() * (max - min + 1) → gera um número entre 0 e (quantidade de números possíveis).
Exemplo: se (max - min + 1) = 5, o resultado vai estar no intervalo [0, 5).
Math.floor(...) → arredonda para baixo, ficando com valores inteiros de 0 até 4.
+ min → desloca o intervalo para começar em min.
Se min=1, os valores [0,1,2,3,4] viram [1,2,3,4,5].
*/