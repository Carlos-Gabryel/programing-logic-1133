const valores = [
    [15, 12, 18, 10],
    [14, 9, 16, 11]
];

const menorValor = (valores) => {
    const flattened = valores.flat();
    return Math.min(...flattened);
}

console.log(menorValor(valores));