// const myArray = [1, 2, 3, 4, 5];

// myArray.forEach( (elemtn) => {
//     console.log(elemtn);
// })


// lets try different way

// function printMe(element) {
//     console.log(element);
// }

// myArray.forEach(printMe);


// ++ instead of passing only items we can pass multiple things

// myArray.forEach((element, index, array) => {
//     console.log(element, index, array);
// });


// ++++ Objects in array ++++

const codingLanguages = [
    {name: "JavaScript", year: 1995},
    {name: "Python", year: 1991},
    {name: "Java", year: 1995},
    {name: "C++", year: 1983}
];

codingLanguages.forEach((language) => {
    console.log(language.name, language.year);
})

