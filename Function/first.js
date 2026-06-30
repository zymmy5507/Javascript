
function checkLoginStatus(user) {
    if (!user || !user.isLoggedIn) {
        return;
    }

    return (`${user.name} is logged in.`)
}

// Log the result so it produces output when run
// console.log(checkLoginStatus({ name: 'Alice', isLoggedIn: true })); // prints "Alice is logged in."







// rest operator

function calculatePrice(val1, val2,...price) {
    return price;
}

console.log(calculatePrice(10,29,23,45,6567,767676,56565)); // prints 10

// spread and rest operator work together to allow for flexible function arguments and array manipulation. The rest operator collects all remaining arguments into an array, while the spread operator can be used to expand an array into individual elements.
