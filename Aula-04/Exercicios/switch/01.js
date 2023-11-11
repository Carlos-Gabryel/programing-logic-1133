let cor = "black";

function traduzirCor(cor) {
  switch (cor) {
    case "red":
      return "vermelho";
    case "blue":
      return "azul";
    case "green":
      return "verde";
    case "yellow":
      return "amarelo";
    case "black":
      return "preto";
    default:
      return "Cor não encontrada";
  }
}

console.log("A Cor traduzida é: " + traduzirCor(cor));
