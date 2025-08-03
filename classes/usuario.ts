class Usuario2 {
    id: number;
    nome: string;
    email: string;
    senha?: string;
    ativo: boolean;


    constructor(id: number, nome: string, email: string, senha?: string, ativo: boolean = true) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.ativo = ativo;
    }
}

const usuario: Usuario2 = new Usuario2(1, 'João Silva', 'joao.silva@example.com', 'senha123', true);