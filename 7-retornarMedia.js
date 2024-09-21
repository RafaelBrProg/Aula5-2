let numeros = [10, 7, 8, 5, 6, 10]
let soma = 0
for (let numero of numeros) {
    soma  = soma + numero;
    media = soma / 6
  }
console.log(`O total de nota dos alunos é: ${soma}`);
console.log(`A média total dos alunos é: ${media.toFixed(2)}`)