
const myArr = [1, 2, 3, 4, 5];

const sum = myArr.reduce( (acc, currVal) => {
    // console.log(`acc: ${acc}, currVal: ${currVal}`);
   return acc + currVal;
}, 0);

// console.log(sum);

// ++++++++++++ REAL EXAMPLE ++++++++++

const shoppingCards = [
    { item: 'item 1', price: 100 },
    { item: 'item 2', price: 200 },
    { item: 'item 3', price: 300 },
    { item: 'item 4', price: 400 },
];

const totalPrice = shoppingCards.reduce( (acc, currVal) => {
    return acc + currVal.price;
}, 0)

console.log(`Total Price: ${totalPrice}`);