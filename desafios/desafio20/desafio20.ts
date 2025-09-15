function embaralharLista<T>(lista: T[]): T[] {
    const copia = [...lista];
    for(let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]]
    }
    return copia;
}


const frutas = ["maçã", "banana", "uva"];
console.log(embaralharLista(frutas));

// Primeira linção importante aqui
// 1 - Estudar Generics
// 2 - Estudar desestruturação