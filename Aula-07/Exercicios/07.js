const alunos = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 18 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 17 },
  { nome: "Lucas", idade: 19 },
  { nome: "Julia", idade: 21 },
];

const maioresDeIdade = alunos.filter((aluno) => aluno.idade >= 18);
const menoresDeVinte = alunos.filter((aluno) => aluno.idade < 20);
const nomesComJ = alunos.filter((aluno) => aluno.nome.startsWith("J"));

console.log("Alunos maiores de idade:", maioresDeIdade);
console.log("Alunos menores de vinte:", menoresDeVinte);
console.log('Alunos com nome começando com "J":', nomesComJ);
