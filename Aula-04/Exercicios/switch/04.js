
function calculadora(num1, num2, acao) {
  switch (acao) {
    case "somar":
      return num1 + num2;
    case "subtrair":
      return num1 - num2;
    case "dividir":
      return num1 / num2;
    case "multiplicar":
      return num1 * num2;
    default:
      return "Ação inválida";
  }
}

console.log(calculadora(5, 3, "somar")); // 8
console.log(calculadora(5, 3, "subtrair")); // 2
console.log(calculadora(5, 3, "dividir")); // 1.6666666666666667
console.log(calculadora(5, 3, "multiplicar")); // 15
console.log(calculadora(5, 3, "potencia")); // Ação inválida
