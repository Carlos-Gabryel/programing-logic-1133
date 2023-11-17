const empregados = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

const hasHighSalary = empregados.some((empregado) => empregado.salario >= 1500);
console.log(hasHighSalary); // return: true

const hasLowSalary = empregados.some((empregado) => empregado.salario <= 1000);
console.log(hasLowSalary); // return: false
