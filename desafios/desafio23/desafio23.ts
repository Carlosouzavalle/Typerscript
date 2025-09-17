const valor23 = 3234;
console.log("Unidades: " + valor23 % 10)
console.log("Dezenas: " + (Math.floor(valor23 / 10) % 10))
console.log("Centena: " + (Math.floor(valor23 / 100) % 10))
console.log("Milhar: " + Math.floor(valor23 / 1000))