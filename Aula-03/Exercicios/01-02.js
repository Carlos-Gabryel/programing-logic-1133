const contatos = [
  {
    nome: "John Doe",
    telefone: "555-5555",
    endereço: {
      nomeRua: "Main St",
      numeroCasa: "123",
      bairro: "Downtown",
    },
    dataNascimento: "01/01/1990",
  },
  {
    nome: "Jane Smith",
    telefone: "555-1234",
    endereço: {
      nomeRua: "Oak St",
      numeroCasa: "456",
      bairro: "Suburbia",
    },
    dataNascimento: "02/02/1995",
  },
  {
    nome: "Bob Johnson",
    telefone: "555-9876",
    endereço: {
      nomeRua: "Elm St",
      numeroCasa: "789",
      bairro: "Rural",
    },
    dataNascimento: "03/03/1980",
  },
];

for (let i = 0; i < contatos.length; i++) {
  const contact = contatos[i];
  console.log(
    `Nome: ${contact.nome}, Telefone: ${contact.telefone}, Endereço: ${contact.endereço.nomeRua}, ${contact.endereço.numeroCasa}, ${contact.endereço.bairro}, Data de Nascimento: ${contact.dataNascimento}`
  );
}
