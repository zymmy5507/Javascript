// let myArray = [1,2,4,6,"varun", "hello", 3, 5, 7];


// for(let i = 0; i< myArray.length; i++) {
//     console.log(myArray[i]);
// }

// +++++++++++++++ FOR OF ++++++++++++++++++

// const myArr = [1,2,3,4,5,6,7,8,9,10];

// for(const val of myArr) {
//     console.log(val);
    
// }


// same we can do in string like i have to print or traverse each character of string then we can use for of loop

// const myString = "Hello World";

// for(const char of myString) {
//     if(char === " ") {
//         continue;
//     }
//     console.log(char);
// }


// ++++++++++ LETS LEARN ABOUT MAP IN JS +++++++++

// const myMap = new Map();

// myMap.set("name", "Varun");
// myMap.set("age", 22);
// myMap.set("city", "Delhi");

// console.log(myMap);

// console.log(myMap.get("name"))
// console.log(myMap.size);
// myMap.delete("age");
// console.log(myMap.size);


// another example of map 

const myMap = new Map();


myMap.set("IN", "India");
myMap.set("US", "United States");
myMap.set("UK", "United Kingdom");

// // console.log(myMap);

// let iterrate using for in lop (Experimental purpose only)

// for(const val in myMap) {
//     console.log(myMap[val]); // this will give the key of the map
// this is not working because for in loop is used to iterate over the keys of an object, not the values. To get the values, you can use myMap.get(key) inside the loop.
// }

// for(const [key, value] of myMap) {
//     console.log(key);
// }


// +++ try to use for of in Object +++

// const obj = {
//     name : "Varun",
//     age : 22,
//     city : "Delhi"
// }

// for( const key of Object.keys(obj)) {
//     console.log(key);
// }


// ++++ same work using FOR IN ++++

const obj = {
    name : "Varun",
    age : 22,
    city : "Delhi"
}

for( const key in obj) {
    // console.log(key);
    // console.log(value); // this will give error because for in loop is used to iterate over the keys of an object, not the values. To get the values, you can use obj[key] inside the loop.

    // console.log( obj[key]); // this will give the key and value of the object


    // console.log(`Key: ${key}, Value: ${obj[key]}`);
}

// + for in in array ++++


// const myArray = [1, 2, 3, 4, 5];

// for( const index in myArray) {
//     console.log(`Index: ${index}, Value: ${myArray[index]}`);
    
// }

// ++++++++++++++ FOR EACH +++++++++++++++++++++


