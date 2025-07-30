// define a estrutura de um objeto, especificando quais 
// propriedades e tipos de dados um objeto deve ter


interface Usuario {
    id: number | string;
    nome: string;
    email: string;
    senha?: string;
    ativo: boolean;
}

let Usuario: Usuario = {
    id: 1,
    nome: "Carlos",
    email: "carlos@example.com",
    senha: "senha123",
    ativo: true
};

console.log(Usuario);