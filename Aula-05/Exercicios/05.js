const ps = require("prompt-sync");
const prompt = ps({ sigint: true });
let listaContatos = [];

for (let i = 0; i < 1; i++) {
  let nome = prompt("Digite o nome do contato:");
  let telefone = prompt("Digite o telefone do contato:");
  let idade = prompt("Digite a idade do contato:");
  let profissao = prompt("Digite a profissão do contato:");

  let contato = {
    nome: nome,
    telefone: telefone,
    idade: idade,
    profissao: profissao,
  };

  listaContatos.push(contato);
}

console.log(listaContatos);
