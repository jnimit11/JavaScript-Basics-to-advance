// Console is used for Logging information to the console, which is helpful for debugging and monitoring the behavior of applications. It provides various methods such as console.log(), console.error(), console.warn(), and many others to output different types of messages. These methods can be used to display information, warnings, errors, and other relevant data during the execution of code. Additionally, console methods can also be used to group messages, measure performance, and trace the flow of execution in applications.

console.log("This is a log message.");
console.error("this is an error message.");
console.warn("This is a warning mesage.");
console.info("This is an informational message.");

// Grouping messages
console.group("User Information");
console.log("Name: John Doe");
console.log("Age: 30");
console.log("Email: john.doe@example.com");
console.groupEnd();

// Measuring performance
console.time("Execution Time");
// Some code to measure
for (let i = 0; i < 1000000; i++) {
    // Simulating a time-consuming task
}
console.timeEnd("Execution Time");

// Tracing the flow of execution
function functionA() {
    console.trace("Trace in functionA");
}
function functionB() {
    functionA();
}
functionB();

