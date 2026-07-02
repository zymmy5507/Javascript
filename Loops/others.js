// in for each loop, we cant return the value, so  there is filter method is used to return the value from the array.

const myArray = [1, 2, 3, 4, 5];

const filteredArray = myArray.filter( (val) => {
    return val > 3;
})

// console.log(filteredArray);

// ++++++++++++++++++++++++++++

const books = [
    { title: 'Book 1', author: 'Author 1', year: 2001 },
    { title: 'Book 2', author: 'Author 2', year: 2005 },
    { title: 'Book 3', author: 'Author 3', year: 2010 },
    { title: 'Book 4', author: 'Author 4', year: 2001 },
];


const filteredBooks = books.filter( (book) => {
    return book.year === 2001;
})

// console.log(filteredBooks);

const anotherFilteredBooks = books.filter( (book) => {
    return book.year > 2005 && book.author === 'Author 3';
})

// console.log(anotherFilteredBooks);


// +++++++++++++++++  MAP +++++++++++++++


const myArray2 = [1, 2, 3, 4, 5];

// const mpped = myArray2.map ( (val) => {
//     return val + 10;
// })

// lets see the implementation of chaining

const mpped = myArray2.map ( (val) => {
    return val * 10
})
.map ( (val) => {
    return val + 1;
})
.filter ( (val) => {
    return val > 30;
})

console.log(mpped);


