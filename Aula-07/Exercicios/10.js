const pessoas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

const pessoasComIMC = pessoas.map((pessoa) => {
  const IMC = (pessoa.peso / pessoa.altura ** 2).toFixed(2);
  return { nome: pessoa.nome, IMC };
});

console.log(pessoasComIMC);
