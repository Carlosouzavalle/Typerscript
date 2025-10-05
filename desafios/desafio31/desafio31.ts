/*
    Desenvolva um programa que pergunta a distância de uma viagem em Km. 
    Calcula o preço da passagem. cobrando R$0.50 por Km para viagens de até 200Km e R$0.45 para viagens mais longas.
*/

let distancia: number = 210;
let valor_ate_200km: number = 0.45
let valor_acima_200km: number = 0.50

if(distancia > 200) {
    let valorPassagem: number = distancia * valor_ate_200km
    console.log(valorPassagem)
} 
else {
    let valorPassagem: number = distancia * valor_acima_200km
    console.log(valorPassagem)
}
