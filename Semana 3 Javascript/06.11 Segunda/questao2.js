let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];

function primo(numeros) {
    for(let i = 2, sqrt = Math.sqrt(numeros); i <= sqrt; i++) {
        if(numeros % i == 0) return false;
    return numeros > 1;
    }
}

let num_primo = numeros.filter(primo);
console.log(num_primo);

let quadrados = num_primo.map(num => num ** 2);
console.log(quadrados)