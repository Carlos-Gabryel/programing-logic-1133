let numero = 7;

let isWeekend = numero == 1 || numero == 7;

function verificarDiaSemana(numero) {
  let diaSemana;
  switch (numero) {
    case 1:
      diaSemana = "Domingo";
      isWeekend = true;
      break;
    case 2:
      diaSemana = "Segunda-feira";
      isWeekend = false;
      break;
    case 3:
      diaSemana = "Terça-feira";
      isWeekend = false;
      break;
    case 4:
      diaSemana = "Quarta-feira";
      isWeekend = false;
      break;
    case 5:
      diaSemana = "Quinta-feira";
      isWeekend = false;
      break;
    case 6:
      diaSemana = "Sexta-feira";
      isWeekend = false;
      break;
    case 7:
      diaSemana = "Sábado";
      isWeekend = true;
      break;
    default:
      diaSemana = "Número inválido";
  }
  if (isWeekend) {
    return diaSemana + ", Fim de semana";
  } else {
    return diaSemana + ", Dia útil";
  }
}
console.log(verificarDiaSemana(numero));
