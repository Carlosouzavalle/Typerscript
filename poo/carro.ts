export default abstract class Carro {
    constructor (
        private readonly VelocidadeMaxima: number = 200,
        private readonly Cor: string = 'preto',
        private readonly Ano: number = 2020, 
        protected velocidadeAtual: number = 0,
    ) {}

    get velocidade(): number {
        return this.velocidadeAtual;
    }
}

interface Esportivo {
    LigarTurbo(): void;
    DesligarTurbo(): void;
}

class Ferrari extends Carro implements Esportivo {
    private turbo = false;

    constructor() {
        super(350, 'vermelho', 2023);
    }

    LigarTurbo(): void {
        this.turbo = true;
    }
     
    DesligarTurbo(): void {
        this.turbo = false;
    }
    
}

class Civic extends Carro {
    constructor() {
        super(220, 'prata', 2022);
    }
}

const carro = new Civic();
console.log(carro.velocidade);