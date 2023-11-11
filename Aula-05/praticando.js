const nomeUsuario = null;
const nome1 = nomeUsuario ?? "Usuário Desconhecido";
console.log(nome1);

const valor1 = null;
const valor2 = undefined;
const valor3 = "Valor existente";

const resultado1 = valor1 ?? "Valor padrão";
const resultado2 = valor2 ?? "Valor padrão";
const resultado3 = valor3 ?? "Valor padrão";

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

const usuario = {
  nome: "João",
  endereco: {
    rua: "Rua A",
    cidade: "São Paulo",
  },
};

const cidadeUsuario = usuario?.endereco?.cidade;
console.log(cidadeUsuario);

const estadoUsuario = usuario?.endereco?.estado;
console.log(estadoUsuario);

const nome = undefined;
const nomeCompleto = nome?.nomeCompleto ?? "Nome não encontrado";
console.log(nomeCompleto);
