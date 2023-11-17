const lugares = [
  { nome: "Sala de Reuniões", capacidade: 8 },
  { nome: "Auditório", capacidade: 50 },
  { nome: "Sala de Treinamento", capacidade: 20 },
  { nome: "Sala de Conferências", capacidade: 30 },
  { nome: "Sala de Estudos", capacidade: 12 },
];

const lugarCapacidadeMinima10 = lugares.find((lugar) => lugar.capacidade >= 10);
const lugarCapacidadeMinima25 = lugares.find((lugar) => lugar.capacidade >= 25);
const lugarCapacidadeMinima40 = lugares.find((lugar) => lugar.capacidade >= 40);

console.log(lugarCapacidadeMinima10);
console.log(lugarCapacidadeMinima25);
console.log(lugarCapacidadeMinima40);
