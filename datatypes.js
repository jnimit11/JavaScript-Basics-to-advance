// Datatypes in JavaScript are used to represent different types of data. The main datatypes in JavaScript include:

// 1. Primitive Datatypes:
//    - String: Represents a sequence of characters. Example: "Hello, World!"
//    - Number: Represents both integer and floating-point numbers. Example: 42, 3.14
//    - BigInt: Represents large integers that cannot be represented by the Number type. Example: 9007199254740991n
//    - Boolean: Represents a logical value that can be either true or false. Example: true, false
//    - Null: Represents the intentional absence of any object value. Example: null
//    - Undefined: Represents an uninitialized variable or a variable that has not been assigned a value. Example: undefined
//    - Symbol: Represents a unique identifier. Example: Symbol.toString('description');

// 2. Non-Primitive Datatypes:
//    - Object: Represents a collection of properties and methods. Example: { name: "John", age: 30 }
//    - Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
//    - Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log("Hello!"); }

console.log(typeof "ChaiCode"); // Output: string
console.log(typeof 50); // Output: number
console.log(typeof true); // Output: boolean
console.log(typeof null); // Output: object (this is a known quirk in JavaScript)
console.log(typeof undefined); // Output: undefined
console.log(typeof Symbol("id")); // Output: symbol
console.log(typeof { name: "Nimit", age: 21 }); // Output: object
console.log(typeof [1, 2, 3]); // Output: object (arrays are a type of object in JavaScript)
console.log(typeof function() { console.log("Hello!"); }); // Output: function
console.log(typeof 42n); // Output: bigint (represents large integers)