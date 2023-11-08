const prompt = require('prompt-sync')();

let entrada = Number(prompt('Digite um numero inteiro positivo: '));

if (entrada > 0) {
    switch (entrada) {
        case 1:
            console.log('0');
            break;
        case 2:
            console.log('0, 1');
            break;
        default :
        let fib = [0, 1];
        for (let i = 2; i < entrada; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
            if (fib[i] == entrada) {
                break
            }
        }
    console.log(fib)
    }
} else {
    console.log('Nenhum numero na sequencia.');
}

