// Random number generator that takes 2 parameter
const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 2));
}

let num1 = randNum(-12, 12);
let num2 = randNum(-12, 12);
let num3 = randNum(-12, 12);
let num4 = randNum(-12, 12);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
