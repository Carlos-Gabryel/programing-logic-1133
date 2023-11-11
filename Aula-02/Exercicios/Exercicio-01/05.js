const notas = [
    [17, 28, 11],
    [46, 39, 44],
    [35, 57, 44],
    [48, 39, 88]
];

const media = (notas) => {
    const flattenedArray = notas.flat();
    const sum = flattenedArray.reduce((acumulated, current) => acumulated + current, 0);
    return sum / flattenedArray.length;
}

console.log(media(notas));
