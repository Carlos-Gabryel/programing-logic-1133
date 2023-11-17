const atletas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

atletas.sort((a, b) => a.peso - b.peso);
console.log(atletas);

atletas.sort((a, b) => b.altura - a.altura);
console.log(atletas);

atletas.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(atletas);
