const prompt = require('prompt-sync')();

let nomeUsuario = prompt('Digite o seu nome de usuário: ');

while (true) {
 if (nomeUsuario.length < 12) {
   console.log("Nomes de usuário devem ter pelo menos 12 caracteres.");
   nomeUsuario = prompt('Digite o seu nome de usuário: ');
 } else if (!nomeUsuario.startsWith('user')) {
   console.log("Os usuários devem começar seu nome com 'user'.");
   nomeUsuario = prompt('Digite o seu nome de usuário: ');
 } else if (nomeUsuario.indexOf('@') === -1) {
   console.log("O nome de usuário deve conter '@'.");
   nomeUsuario = prompt('Digite o seu nome de usuário: ');
 } else if (nomeUsuario.startsWith('admin')) {
   console.log("Os usuários não podem começar seu nome com 'admin'.");
   nomeUsuario = prompt('Digite o seu nome de usuário: ');
 } else {
   nomeUsuario = nomeUsuario.toLowerCase();
   console.log("Nome de usuário válido: " + nomeUsuario);
   break;
 }
}
