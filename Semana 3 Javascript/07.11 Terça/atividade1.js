let pessoa = {};

pessoa.nome = "Gabriel";
pessoa.idade = 20;

console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);

pessoa.idade = 31;
console.log("Idade: " + pessoa.idade);

let pessoa2 = {
    nome: "Carlos",
    idade: 28
    };

for (let propriedade in pessoa2) {
    console.log(propriedade + ": " + pessoa2[propriedade]);
    }

pessoa2.apresentacao = function() {
    console.log("Olá, meu nome é " + this.nome);
    };
  
pessoa2.apresentacao();

pessoa.email = "ficticio@email.com";
console.log("E-mail: " + pessoa.email);