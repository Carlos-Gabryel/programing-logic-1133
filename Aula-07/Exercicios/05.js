
const lista1 = ['banana', 'pera', 'melancia'];
const lista2 = ['alface', 'tomate', 'rucula'];

const mergedList = lista1.concat(lista2);
console.log("Tamanho das listas juntas:", mergedList.length);

const lista3 = ['limao', 'laranja', 'acerola'];
const lista4 = ['pimenta', 'pimentao', 'alho'];

const allLists = lista1.concat(lista2, lista3, lista4);
console.log("Tamanho de todas as listas juntas:", allLists.length);
