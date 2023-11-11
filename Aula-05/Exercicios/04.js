
// Solicita ao usuário o número de termos da sequência de Fibonacci a serem exibidos
const n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci a serem exibidos: "));

// Inicializa as variáveis para os dois primeiros termos da sequência
let termo1 = 0;
let termo2 = 1;

// Exibe os primeiros n termos da sequência de Fibonacci
let i = 1;
while (i <= n) {
  console.log(termo1);
  const proximoTermo = termo1 + termo2;
  termo1 = termo2;
  termo2 = proximoTermo;
  i++;
}
