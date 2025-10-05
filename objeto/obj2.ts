//Objeto com funções

// interface contaBancaria {
//     titular: string;
//     saldo: number;
//     depositar(valor: number): void;
// }

// const conta: contaBancaria = {
//     titular: "Carlos",
//     saldo: 1000,
//     depositar(valor) {
//         this.saldo += valor
//         console.log(`deposito de ${valor} realizado! Novo saldo: R$${this.saldo}`)
//     }
// }
// conta.depositar(200);


//=====================================================================================================================


// objetos aninhados (objetos dentro de objetos)
type Endereco = {
    rua: string;
    cidade: string;
}

type Pessoa2 = {
    nome: string;
    idade: number;
    endereco: Endereco; // aqui vai puxar do objeto lá de cima
}

const pessoa22: Pessoa2 = {
    nome: "Carlos",
    idade: 26,
    endereco: { // aqui a gente chama ele
        rua: "Rua blablabla",
        cidade: "são paulo"
    }
}
