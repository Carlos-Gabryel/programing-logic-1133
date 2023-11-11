
// Cria um array vazio para armazenar os contatos
let listaContatos = [];

// Loop para pedir os dados dos 5 contatos
for (let i = 0; i < 5; i++) {
  // Pede os dados do contato
  let nome = prompt("Digite o nome do contato:");
  let telefone = prompt("Digite o telefone do contato:");
  let idade = prompt("Digite a idade do contato:");
  let profissao = prompt("Digite a profissão do contato:");

  // Cria um objeto com os dados do contato
  let contato = {
    nome: nome,
    telefone: telefone,
    idade: idade,
    profissao: profissao
  };

  // Adiciona o objeto à lista de contatos
  listaContatos.push(contato);
}

// Mostra a lista de contatos
console.log(listaContatos);
