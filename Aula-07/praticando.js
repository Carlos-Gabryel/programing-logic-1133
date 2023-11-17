const numbers = [1, 2, 3];
const length = numbers.push(4, 5);
console.log(numbers);
console.log(length);

const fruits = ["apple", "banana", "orange", "grape", "mango"];
console.log(fruits.at(1));
console.log(fruits.at(-2));

const numbers = [1, 2, 3, 4, 5];
const even = numbers.every((num) => num % 2 === 0);
console.log(even);

const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.every((word) => word.length >= 5);
console.log(longEnough);

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter((word) => word.length >= 6);
console.log(longWords);

const numbers = [1, 2, 3, 4, 5];
const even = numbers.find((num) => num % 2 === 0);
console.log(even);

const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.find((word) => word.length >= 6);
console.log(longEnough);

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
console.log(squares);

const words = ["apple", "banana", "cherry", "date"];
const upperCaseWords = words.map((word) => word.toUpperCase());
console.log(upperCaseWords);
