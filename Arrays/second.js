
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// console.log(arr1.push(arr2)); // Adds arr2 as a single element to arr1 and returns the new length of arr1

// console.log(arr1); // Output: [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]


// arr1.push(...arr2);

// console.log(arr1); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newArr =  [...arr1,...arr2];
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// of from method
const arr3 = Array.of(1, 2, 3, 4, 5);
console.log(arr3); // Output: [1, 2, 3, 4, 5]

// of method creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.

const arr4 = Array.from('hello');
console.log(arr4); // Output: ['h', 'e', 'l', 'l', 'o']