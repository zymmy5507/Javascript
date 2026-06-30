

const tinderUser = new Object(); // this is called object constructor syntax (singaleton pattern) and this is not a good practice to use this because it will create a new object every time we call this constructor function and it will take more memory and it will be slow. so we should use object literal syntax instead of object constructor syntax.
// const tinderUser = {} // this is called object literal syntax

const regularUser = {
    email: "regular@example.com",
    fullName: {
        userFullName: {
            firstName: "John",
            lastName: "Doe"
        }
    }
};

// console.log(regularUser);
// console.log(regularUser.fullName.userFullName.firstName); // Output: John


const obj1 = { 1: "one", 2: "two", 3: "three" };
const obj2 = { 4: "four", 5: "five", 6: "six" };

const mergedObj = Object.assign({}, obj1, obj2);
// console.log(mergedObj); // Output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' } // this will merge the two objects into one object and return a new object

// or we can also use spread operator to merge the two objects into one object and return a new object

const mergedObj2 = { ...obj1, ...obj2 };
// console.log(mergedObj2); // Output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' } // this will merge the two objects into one object and return a new object


/// Object destructing is a feature in JavaScript that allows us to extract values from objects and assign them to variables in a more concise way. It is a convenient way to extract multiple properties from an object and assign them to variables in a single statement.

const { email, fullName } = regularUser; // this will extract the email and fullName properties from the regularUser object and assign them to the email and fullName variables respectively
console.log(email); // Output: regular@example.com
console.log(fullName); // Output: [Object]