
function One() {
    const userName = "Varun";

    function Two() {

        const age = 20;
        console.log(userName);

    }

    console.log(age); // ReferenceError: age is not defined
    Two(); // ReferenceError: two is not defined
}

// One();



// +++++++++++++++++++ INTERSTING+++++++++++

// function

firstFunction();

function firstFunction() {
    let a = 10;
    console.log(a);
}


// function expression

// secondFunction(); // ReferenceError: Cannot access 'secondFunction' before initialization
const secondFunction = function() {
    let b = 20;
    console.log(b);
};

// secondFunction(); 