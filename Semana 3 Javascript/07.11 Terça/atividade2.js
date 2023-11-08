let livro = {
    titulo: "Aventuras de Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    anoPublicacao: 1865,
    genero: "Fantasia",
    disponivel: true,
    empresta: function() {
        this.disponivel = false;
    }
};

console.log("Informações do Livro:");
console.log("Título: " + livro.titulo);
console.log("Autor: " + livro.autor);
console.log("Ano de Publicação: " + livro.anoPublicacao);
console.log("Gênero: " + livro.genero);
console.log("Disponível para Empréstimo: " + livro.disponivel);

/*for (let propriedade in livro) {
    console.log(propriedade + ": " + livro[propriedade]);
    }*/

livro.empresta();

console.log("Disponível para Empréstimo: " + livro.disponivel);
