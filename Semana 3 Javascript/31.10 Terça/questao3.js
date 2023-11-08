const prompt = require('prompt-sync')();

let confirm = prompt('informe se deseja imprimir um retangulo (s/n) ');

while (confirm != "n") {
    let altura = Number(prompt('Digite a altura: '))
    let largura = Number(prompt('Digite a largura: '))

    if (altura > largura) {
        console.log('Largura deve ser maior que a altura.')
        break;
    } else {
        for (let a = 0; a < altura; a++) {
            let linha = '';
            for (let l = 0; l < largura; l++) {
                linha += '*';
            }
            console.log(linha);
        }
    }

    confirm = prompt('informe se deseja imprimir um retangulo (s/n) ');

}