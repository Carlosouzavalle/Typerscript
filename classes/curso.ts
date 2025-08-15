class Curso {
    constructor(
        readonly id: number,
        public nome: string,
        public duracaoEmSegundos: number // duração em horas
    ) {}

    duracaoEmHR(): string { 
        const horas = Math.floor(this.duracaoEmSegundos / 3600);
        const minutos = Math.floor((this.duracaoEmSegundos % 3600) / 60);
        //const segundos = this.duracaoEmSegundos % 60;
        return `${horas}h ${minutos}m`;
    }
}

const curso = new Curso(1, 'Curso de TypeScript', 7200);
console.log(curso.nome); // Exibe: Curso de TypeScript
console.log(curso.duracaoEmHR()); // Exibe: 2h 0m
