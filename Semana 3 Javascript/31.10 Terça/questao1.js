const prompt = require('prompt-sync')();

let first_number = parseInt(prompt('Digite o primeiro numero: '));
let second_number = parseInt(prompt('Digite o segundo numero: '));

let temp = 0

for (let i = 0; i < first_number; i++ ) {
    temp += second_number
}
console.log(temp)