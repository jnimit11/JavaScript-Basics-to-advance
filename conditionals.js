// Conditions in JavaScript are used to perform different actions based on different conditions. The most common conditional statements are if, else if, and else.

// Example of if statement:
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
// Example of if-else statement:
let number = 10;
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Example of if-else-if else statement:
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if-else statements when you have a large number of conditions to check.

// Example of switch statement:
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}