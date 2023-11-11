const matriz = [
  [2, 4, 6],
  [3, 7, 9],
  [5, 8, 10],
];

const produto = matriz.map(arr => arr.reduce((acc, curr) => acc * curr));

console.log(produto);