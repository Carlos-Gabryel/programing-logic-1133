var pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 16 }
];

var todosMaioresDeIdade = pessoas.every(function(pessoa) {
  return pessoa.idade >= 18;
});

var nomesComMaisDe3Caracteres = pessoas.every(function(pessoa) {
  return pessoa.nome.length > 3;
});

var todosComNomeEIdadeDefinidos = pessoas.every(function(pessoa) {
  return pessoa.nome && pessoa.idade;
});

console.log(todosMaioresDeIdade);
console.log(nomesComMaisDe3Caracteres);
console.log(todosComNomeEIdadeDefinidos);
