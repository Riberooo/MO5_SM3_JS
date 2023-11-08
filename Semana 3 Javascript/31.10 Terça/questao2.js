const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um numero: '))

let soma = 0
let cont = 0
let total = 0

while (num != 0) {
    soma += num
    cont++
    num = Number(prompt('Digite um numero: '))
    total = soma / cont
}

console.log(total)