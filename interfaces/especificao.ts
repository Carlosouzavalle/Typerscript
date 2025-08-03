interface Especificacoes {
    marcar: string;
    nome: string;
    placaDeVideo: string;
    modelo: string;
    memoriaRam: string;
    processador: string;
    armazenamento: string;
    [extra: string]: string | number | boolean;
}
// o fato de termos essa linha aq
// [extra: string]: string | number | boolean;
// significa que podemos adicionar propriedades extras

let computador: Especificacoes = {
    marcar: "Dell",
    nome: "Inspiron 15",
    placaDeVideo: "NVIDIA GeForce MX250",
    modelo: "Inspiron 15 3000",
    memoriaRam: "8GB",
    processador: "Intel Core i5",
    armazenamento: "1TB",
    garantia: "2 anos",
    tecladoRetroiluminado: true,
    webcam: "720p HD",
    peso: 1.8,
    cor: "Prata"
};

console.log(computador);