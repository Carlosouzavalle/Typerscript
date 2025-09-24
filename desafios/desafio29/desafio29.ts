const velocidadeCarro: number = 120;
const velocidadeMinima: number = 80;
const multaPorKm: number = 7;

if(velocidadeCarro > velocidadeMinima)
{
    const valorMulta = (velocidadeCarro - velocidadeMinima) * multaPorKm;
        console.log(`Você ultrapassou o limite de velocidade, deve pagar 
            uma multa de ${valorMulta} R$`)
} else {
    console.log("Dirija com cuidado")
}