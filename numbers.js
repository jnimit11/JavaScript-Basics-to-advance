// Numbers in JavaScript are a primitive data type that can represent both integer and floating-point values. They are used to perform mathematical operations, comparisons, and other calculations. In JavaScript, numbers are represented using the IEEE 754 standard for double-precision floating-point arithmetic.

let integer = 42;       // Stored as a floating-point under the hood
let decimal = 3.14;     // Also a Number

let invalid = "hello" / 2; // Returns NaN

let positiveInf = 1 / 0; // Returns Infinity
let negativeInf = -1 / 0; // Returns -Infinity

console.log(0.1 + 0.2); // Outputs: 0.30000000000000004
let total = (0.1 + 0.2).toFixed(2); // "0.30" (returns a string)

let huge = 9007199254740991n; // Appending 'n' makes it a BigInt


// Useful Built-in Number Methods
// Number.isNaN(value): Safely checks if a value is truly NaN.
// Number.isInteger(value): Checks if a value is a whole number.
// parseInt(string): Converts a string to an integer.
// parseFloat(string): Converts a string to a floating-point number.

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// asking about some methods of Number object
console.log(Number.isFinite(5)); // true
console.log(Number.isNaN(invalid)); // true
console.log(Number.isInteger(integer)); // true

// Conversion methods
console.log(parseInt("42px")); // 42, coverts string to integer, ignores non-numeric characters
console.log(parseFloat("3.14abc")); // 3.14, converts string to float, ignores non-numeric characters

const num1 = 4.567;
console.log(Math.round(num1)); // 5, rounds to nearest integer
console.log(Math.floor(num1)); // 4, rounds down to nearest integer
console.log(Math.ceil(num1)); // 5, rounds up to nearest integer
console.log(Math.trunc(num1)); // 4, removes the decimal part without rounding
console.log(Math.random()); // Generates a random number between 0 (inclusive) and 1 (exclusive)
