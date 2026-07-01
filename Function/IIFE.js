// IIFE.js
// Notes on IIFE (Immediately Invoked Function Expression)

// 1. What is an IIFE?
// IIFE stands for Immediately Invoked Function Expression.
// It is a function that is defined and executed right away.

(function() {
    // This code runs immediately when the script is loaded.
    // The function creates a new scope, so variables inside do not leak to the global scope.
    let message = 'Hello from IIFE';
    console.log(message);
})();

// 2. Why use an IIFE?
// - To avoid polluting the global namespace.
// - To create a private scope for variables and functions.
// - To run setup code immediately.
// - Useful in older JavaScript environments before block scope (let/const) was common.

// 3. Example: avoid global variable collision
let name = 'Global Name';

(function() {
    let name = 'IIFE Name';
    console.log('Inside IIFE:', name); // IIFE Name
})();

console.log('Outside IIFE:', name); // Global Name

// 4. Example: IIFE returning a value
let result = (function(num) {
    let squared = num * num;
    return squared;
})(5);

console.log('Result from IIFE:', result); // 25

// 5. When to use IIFE
// - When you need a one-time initialization block.
// - When you want to keep helper variables private.
// - When writing modular code without module support.

// 6. Modern alternatives
// With ES6 modules and block scope, IIFEs are less common, but they are still useful
// for immediately running code and isolating temporary variables.
