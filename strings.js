// Strings in javascript are used to represent text.

// Three ways to create strings in JavaScript:
// 1. Using double quotes:
let str1 = "Hello, World!";
console.log(str1); // Output: Hello, World!
// 2. Using single quotes:
let str2 = 'Hello, World!';
console.log(str2); // Output: Hello, World!
// 3. Using template literals (backticks):
let name = "Nimit";
let str3 = `Hello, ${name}!`;
console.log(str3); // Output: Hello, Nimit!

// Strings are immutable in JavaScript, which means that once a string is created, it cannot be changed.
let intercepted = "Hello";
intercepted[0] = "h";
console.log(intercepted); // Output: Hello
// silently fails to change the first character of the string, because strings are immutable.

// Some useful built-in string methods in JavaScript include:
const secretcode = "VK-18";
console.log(secretcode.length); // Output: 5, returns the length of the string
console.log(secretcode.charAt(0)); // Output: V, returns the character at the specified index
console.log(secretcode.at(4)); // Output: 8, returns the character at the specified index (supports negative indexing)
console.log(secretcode.toUpperCase()); // Output: VK-18, converts the string to uppercase
console.log(secretcode.toLowerCase()); // Output: vk-18, converts the string to lowercase
console.log(secretcode.includes("VK")); // Output: true, checks if the string contains a specified substring
console.log(secretcode.startsWith("VK")); // Output: true, checks if the string starts with a specified substring
console.log(secretcode.endsWith("18")); // Output: true, checks if the string ends with a specified substring   
console.log(secretcode.indexOf("K")); // Output: 1, returns the index of the first occurrence of a specified substring
console.log(secretcode.slice(2, 5)); // Output: -18, returns a portion of the string between the specified indices

splitString = "Hello, World!";
console.log(splitString.split(", ")); // Output: ["Hello", "World!"], splits the string into an array of substrings based on a specified separator  

padString = "5";
console.log(padString.padStart(3, "0")); // Output: "005", pads the string with a specified character until it reaches a specified length
console.log(padString.padEnd(3, "0")); // Output: "500", pads the string with a specified character until it reaches a specified length 

trimString = "   Hello, World!   ";
console.log(trimString.trim()); // Output: "Hello, World!", removes whitespace from both ends of the string
console.log(trimString.trimStart()); // Output: "Hello, World!   ", removes whitespace from the beginning of the string
console.log(trimString.trimEnd()); // Output: "   Hello, World!", removes whitespace from the end of the string

joinString = ["Hello", "World", "!"];
console.log(joinString.join(" ")); // Output: "Hello World !", joins the elements of an array into a single string with a specified separator

replaceString = "Hello, World!";
console.log(replaceString.replace("World", "JavaScript")); // Output: "Hello, JavaScript!", replaces a specified substring with another substring

repeatString = "Hello! ";
console.log(repeatString.repeat(3)); // Output: "Hello! Hello! Hello! ", repeats the string a specified number of times