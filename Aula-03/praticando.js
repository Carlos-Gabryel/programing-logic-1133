// for (let indice = 0; indice <= 5; indice++) {
//   console.log("condição", indice <= 5);
//   console.log("indice", indice);
// }

// let exemplo = 0;
// console.log(exemplo);
// exemplo++;
// console.log(exemplo);
// exemplo--;
// console.log(exemplo);
// exemplo += 2;
// console.log(exemplo);
// exemplo -= 2;
// console.log(exemplo);
// exemplo *= 2;
// console.log(exemplo);

// let numeros = [10, 20, 30, 40, 50];
// for (let i = 0; i < numeros.length; i++) {
//   console.log("indice", i);
//   console.log(numeros[i]);
// }

// let numeros = [10, 20, 30, 40, 50];
// var multiplos = [];
// for (let i = 0; i < numeros.length; i++) {
//   multiplos.push(numeros[i] * 2);
//   console.log({
//     i,
//     multiplos,
//   });
// }

// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matriz[0]);
// console.log(matriz[0][0]);

// for (let i = 0; i < matriz.length; i++) {
//   console.log("for1:", {
//     i,
//     item: matriz[i],
//   });
//   for (let j = 0; j < matriz[i].length; j++) {
//     console.log("for2:", {
//       j,
//       item: matriz[i][j],
//     });
//   }
// }
// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// matriz.forEach((item, i) => {
//   console.log({
//     i,
//     item,
//   });
//   item.forEach((item2, j) => {
//     console.log({
//       j,
//       item2,
//     });
//   });
// });

let alunos = new Map();

alunos.set("João", 18);
alunos.set("Maria", 20);
alunos.set("Pedro", 19);

console.log(alunos.get("Maria")); // 20
