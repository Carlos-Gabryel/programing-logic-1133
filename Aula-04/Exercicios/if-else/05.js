let numero = 101;

function ePalindromo(numero) {
  let numeroInvertido = parseInt(
    numero.toString().split("").reverse().join("")
  );
  return numero === numeroInvertido;
}

if (ePalindromo(numero)) {
  console.log("É palindromo");
} else {
  console.log("Não é palindromo");
}
