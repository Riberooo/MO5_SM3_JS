const prompt = require('prompt-sync')();

let email =  prompt('Digite o seu email: ')

function verifica_email(email) {
    if (email.indexOf("@gmail.com") !== -1) {
        console.log("Contem @gmail.com");
        console.log("Nome de usuario: " + email.slice(0, email.indexOf("@")));
    } else {
        console.log("O email nao contem @gmail.com");
        console.log("O e-mail contém o domínio: " + email.slice(email.indexOf("@")));
    }
}

verifica_email(email);