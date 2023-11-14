const ps = require("prompt-sync");
const prompt = ps({ sigint: true });
const n = parseInt(
  prompt(
    "Digite o número de termos da sequência de Fibonacci a serem exibidos: "
  )
);

let termo1 = 0;
let termo2 = 1;

let i = 1;
while (i <= n) {
  console.log(termo1);
  const proximoTermo = termo1 + termo2;
  termo1 = termo2;
  termo2 = proximoTermo;
  i++;
}
