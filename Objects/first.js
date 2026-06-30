// Objects

// ways to define objects

// 1. Object literal syntax


// i am trying to play with symbol and try to acces with key

const mySym = Symbol("mySymbol");
const person = {
  name: "John",
  "full name": "John Doe",
  age: 30,
//   [mySym]: "This is a symbol property",
  mySym: "This is a symbol property",
  email: "john@example.com"

};
// console.log(person); // Output: { name: "John", age: 30 }

// console.log(person.name); // Output: John
// console.log(person["name"]); // Output: John // this is called bracket notation which is good to use when the property name is dynamic or not a valid identifier

// like example if i am try to access a property which is full name then i can use bracket notation like this person["full name"] but if i try to access it using dot notation like person.full name then it will give me an error because full name is not a valid identifier because it has a space in it. so in that case we can use bracket notation to access the property.

// console,log(person["full name"]); // Output: John Doe


console.log( person[mySym]); // Output: This is a symbol property

person.email = "john.doe@google.com";

console.log(person.email); // Output: john.doe@google.com

// Object.freeze(person); // this will make the object immutable means we can't change the properties of the object

person.age = 40; // this will not change the age property because the object is frozen

console.log(person.age); // Output: 30

console.log(Object.keys(person)); // Output: [ 'name', 'full name', 'age', 'email' ] // this will give me the keys of the object

console.log(Object.values(person)); // Output: [ 'John', 'John Doe', 30, 'john.doe@google.com' ] // this will give me the values of the object




// console.log(person);

const greeting = function () {
    console.log(`Hello, this side is ${this.name} and my age is ${this.age}`);
}

person.greet = greeting; // this will add the greet method to the person object

person.greet(); // Output: Hello, this side is John and my age is 30