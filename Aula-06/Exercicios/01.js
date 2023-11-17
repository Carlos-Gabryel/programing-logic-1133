function countItems(hotifrutis) {
  let frutasCount = 0;
  let vegetaisCount = 0;
  let verdurasCount = 0;

  const frutas = ["banana", "maçã", "abacaxi", "melancia", "laranja", "limão"];
  const vegetais = [
    "cenoura",
    "batata",
    "brócolis",
    "abóbora",
    "tomate",
    "alho-poró",
  ];
  const verduras = [
    "alface",
    "espinafre",
    "rúcula",
    "couve",
    "agrião",
    "acelga",
  ];

  for (let item of hotifrutis) {
    if (frutas.includes(item)) {
      frutasCount++;
    } else if (vegetais.includes(item)) {
      vegetaisCount++;
    } else if (verduras.includes(item)) {
      verdurasCount++;
    }
  }

  return {
    frutas: frutasCount,
    vegetais: vegetaisCount,
    verduras: verdurasCount,
  };
}

const hotifrutis = [
  "banana",
  "agrião",
  "maçã",
  "abacaxi",
  "melancia",
  "laranja",
  "limão",
  "cenoura",
  "melancia",
  "batata",
  "brócolis",
  "abóbora",
  "tomate",
  "alho-poró",
  "alface",
  "espinafre",
  "rúcula",
  "couve",
  "acelga",
  "maçã",
  "batata",
];

const counts = countItems(hotifrutis);
console.log(counts);
