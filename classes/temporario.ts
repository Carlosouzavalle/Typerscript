class Usuario2 {
    constructor(
        public readonly id: number,
        public readonly nome: string,
        public readonly email: string,
        public readonly ativo?: boolean,
        public  senha?: string

    ) {}
}

const usuario: Usuario2 = new Usuario2(1, 'João Silva', 'joao.silva@example.com', true, 'senha123');
console.log(usuario);

// fica mais fácil de ler e entender, além de evitar a necessidade de atribuir valores às propriedades após a criação do objeto.