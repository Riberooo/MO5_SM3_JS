const tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
    ];

for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1} - ${tarefas[i]}`);
}

let tarefas_pendentes = tarefas.filter(tarefa => !tarefa.includes("Feito"));
console.log(tarefas_pendentes);

let tarefas_ordenadas = tarefas.sort();
console.log(tarefas_ordenadas);

let primeiras_tarefas = tarefas.slice(0, 2);
console.log(primeiras_tarefas);

tarefas.pop();
console.log(tarefas);

tarefas.push("Ler livro novo");
console.log(tarefas);