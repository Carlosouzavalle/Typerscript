interface Animal {
    nome: string,
    tipo: 'terrestre' | 'aquatico' | 'voador',
    domestico: boolean,
};

interface Pet extends Animal {
    dono: string;
}


let Cachorro: Pet = {
    nome: 'rex',
    tipo: 'terrestre',
    domestico: true,
    dono: 'cadu',
};

console.log(Cachorro);