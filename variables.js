// variables in javascript are used to store data values. We can declare vraiables using the var, let and const keywords.

// Using var to declare a variable:
var name = "Nimit";
console.log(name); // Output: Nimit
name = "John";
console.log(name); // Output: John
// Here we can see that the value of the variable name can be changed when we use var to declare it, because it is not block scoped and can be re-assigned. However, it is generally recommended to use let and const instead of var to avoid potential issues with variable hoisting and scope.

// Using let to declare a variable:
let age = 25;
console.log(age); // Output: 25
// Here we can see that the value of the variable age can be changed when we use let to declare it, because it is block scoped and can be re-assigned. However, it is generally recommended to use const instead of let when you don't need to re-assign a variable, to make your code more readable and maintainable.

// Using const to declare a variable:
const PI = 3.14;
console.log(PI); // Output: 3.14
PI = 3.24; // This will throw an error because we cannot re-assign a value to a variable declared with const.
// Here we can see that the value of the variable PI cannot be changed when we use const to declare it, because it is block scoped and cannot be re-assigned. This is useful for values that should not change throughout the program, such as mathematical constants or configuration settings.