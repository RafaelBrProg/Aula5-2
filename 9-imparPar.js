let numero = [20, 5, 7, 134, 4, 3,];
console.log(numero.sort((a, b) => a - b));
let numeroPar = numero.filter(numero => numero % 2 === 0)   
console.log(`Esses numeros são pares: ${numeroPar}`)
let numeroImpar = numero.filter(numero => numero % 2 !== 0)   
console.log(`Esses numeros são ímpares: ${numeroImpar}`)
