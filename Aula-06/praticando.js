const nomes = ["João", "Maria", "Pedro"];

for (const nome of nomes) {
  console.log(nome);
}

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

const eachItem = (nome) => {
  console.log(nome);
};

nomes.forEach(eachItem);

const alunos = new Map();
alunos.set(1, "João");
alunos.set(2, "Maria");
alunos.set(3, "Pedro");
console.log(alunos);
for (const [id, nome] of alunos) {
  console.log(id, nome);
  //   console.log(`ID: ${id}, Nome: ${nome}`);
}
const frase = "Teste de javascript";

for (const letra of frase) {
  console.log(letra);
}

const pessoa = {
  nome: "Maria",
  idade: 30,
  cidade: "São Paulo",
};

const keys = Object.keys(pessoa);
console.log(keys);
for (const propriedade of keys) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

console.log(pessoa["nome"]);

function teste(a, b) {
  return a + b;
}

console.log(teste(1, 2));
// Arrow Function
const multiplicar = (a, b) => {
  return a * b;
};
const nome = "teste";
const isEmpty = (arr) => (arr.length ? "Nao esta vazio" : "vazio");
console.log(multiplicar(2, 3));

function isEmpty(arr) {
  if (arr.length) {
    return "Nao esta vazio";
  } else {
    return "vazio";
  }
}

(function (pessoa, numero) {
  console.log(
    `Olá, nome:${pessoa.nome}, sobrenome:${pessoa.sobrenome}, idade:${pessoa.idade}, profissao:${pessoa.profissao}!`
  );
})(
  {
    sobrenome: "Cabral",
    idade: 36,
    nome: "Bruno",
    profissao: "Professor",
  },
  20
);

saudacao(
  {
    sobrenome: "Cabral",
    idade: 36,
    nome: "Bruno",
    profissao: "Professor",
  },
  20
);

(function (palavra) {
  const mensagem = "Olá, mundo!";
  console.log(palavra, mensagem);
})("Aula");

function calcularFatorial(n) {
  console.log(n);
  if (n === 0) {
    return 1;
  }
  //primeira volta -> 5 * calcularFatorial(4) = 5 * 24
  //segunda volta -> 4 * calcularFatorial(3) = 4 * 6
  //terceira volta -> 3 * calcularFatorial(2) = 3 * 2
  //quarta volta -> 2 * calcularFatorial(1) = 2 * 1
  //quinta volta -> 1
  return n * calcularFatorial(n - 1);
}

const resultado = calcularFatorial(5);
console.log(resultado);

// let contador = (number) => number + contador(number + 1);
// console.log(contador(1));

function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

// const resultado = dividir(multiplicar(somar(2, 3), 4), 2);
// console.log(resultado); // Output: 10

function somar(a, b) {
  return a + b;
}

function double(callback, n1, n2) {
  return callback(n1, n2) * 2;
}

console.log(double(somar, 10, 20));

const fruits = ["apple", "banana", "orange", "grape", "mango"];
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));

fruits.forEach((fruit) => console.log(fruit));
