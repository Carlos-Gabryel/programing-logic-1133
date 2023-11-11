"use strict";
const numeroAleatorio = Math.ceil(Math.random() * 100);
console.log(numeroAleatorio);

let tentativas = 0;
const ps = require("prompt-sync");
const prompt = ps({ sigint: true });
let resposta = 0;

function verificarResposta(resposta) {
  tentativas++;
  if (resposta == numeroAleatorio) {
    return tentativas;
  } else if (resposta < numeroAleatorio) {
    console.log("O número é maior!");
  } else {
    console.log("O número é menor!");
  }
}

while (resposta != numeroAleatorio) {
  resposta = prompt("Digite um número: ");
  verificarResposta(resposta);
}
return console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
