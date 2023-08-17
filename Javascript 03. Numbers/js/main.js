const myNumber = 42;
const myFloat =42.01;

const myString = "42.123asda";

console.log(myNumber);

console.log(myFloat);

console.log(myString);

console.log(myNumber ===myFloat);


console.log(myString + 3);
console.log(Number(myString)+3);

console.log(Number(myString)===42);

console.log(Number(true));

console.log(Number("Lou")); //Nan Not a number

console.log(Number(undefined)); //Nan Not a number

console.log(Number(true)); //1

console.log(Number(false)); //0

console.log(Number.parseFloat(myString));

console.log(myFloat.toString());

console.log(Number.parseFloat("123.3").toFixed(2))
//In JS, decimal and integer are both number
