// Array in javascript is a non-primitive datatype that can hold multiple values at a time. It is a special variable that can hold more than one value. It is used to store a collection of data, but it is often more useful to think of an array as a list of items.

// There are multiple ways to create an array in javaScript:

// 1. Using Array Literal Syntax:
let car1 = ["Kia", "Hyundai", "Honda"];

// 2. Using the Array Constructor:
let car2 = new Array("Kia", "Hyundai", "Honda");

// 3. Using the Array.of() method:
let car3 = Array.of("Kia", "Hyundai", "Honda");

// 4. Using the Array.from() method:
let car4 = Array.from(["Kia", "Hyundai", "Honda"]);

// 5. Using the spread operator:
let car5 = [...["Kia", "Hyundai", "Honda"]];

// using array.of(3) will create an array with a single element 3, while using new Array(3) will create an array with 3 empty slots.
let arr1 = Array.of(3);

// Some of the common methods used with arrays in JavaScript include:
console.log(car1.length); // returns the number of elements in the array
console.log(car1.push("Toyota")); // adds a new element to the end of the array
console.log(car1.pop()); // removes the last element from the array
console.log(car1.shift()); // removes the first element from the array
console.log(car1.unshift("Ford")); // adds a new element to the beginning of the array
console.log(car1.indexOf("Hyundai")); // returns the index of the first occurrence of the specified element in the array
console.log(car1.slice(1, 3)); // returns a new array containing a portion of the original array, starting from the specified index and ending at the specified index (not inclusive)
console.log(car1.splice(1, 2)); // removes elements from the array and returns the removed elements as a new array, starting from the specified index and removing the specified number of elements
console.log(car1.join(", ")); // returns a string by concatenating all the elements of the array, separated by the specified separator
console.log(car1.reverse()); // reverses the order of the elements in the array
console.log(car1.sort()); // sorts the elements of the array in place and returns the sorted array
console.log(car1.flat()); // returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
console.log(car2.includes("Toyota")); // returns true if the specified element is found in the array, otherwise returns false

console.log(Array.isArray([]));
console.log(typeof []);