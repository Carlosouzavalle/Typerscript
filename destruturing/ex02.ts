// aqui é com objecto
type Pessoa = {
    nome222: string;
    idade222: number;
};

const pessoa2: Pessoa = {nome222: "Carlos", idade222: 26};

//Destruturing 
const {nome222, idade222}: Pessoa = pessoa2;

console.log(nome222);
console.log(idade222);