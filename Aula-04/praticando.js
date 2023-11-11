const condition = true;
const condition2 = true;

if (condition) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if (condition) {
  console.log("Condição 1");
} else if (condition2) {
  console.log("Condição 2");
} else {
  console.log("Falso");
}

const idade = 17;

const podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir);

const possuiCNH = true;
if (idade >= 18 && possuiCNH) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

const diaSemana = "sábado";
const diaUtil =
  diaSemana === "segunda" ||
  diaSemana === "terça" ||
  diaSemana === "quarta" ||
  diaSemana === "quinta" ||
  diaSemana === "sexta";

if (diaUtil) {
  console.log("Dia útil");
} else {
  console.log("Fim de semana");
}
