

const User = {
    userName: "Varun",
    age: 25,

    welcomeMessage: function() {
        console.log( `Welcome,  ${this.userName} `);
    }
}

// console.log(User.welcomeMessage());

// User.welcomeMessage();

User.userName = "Sharma";

// User.welcomeMessage();


// basically, here "this" refers to the object "User" and it is used to access the properties of the object. In this case, it is used to access the "userName" property of the "User" object.

// what happen if i use this is function what will be oputput and reason also

function testThis() {
    let a = 10;
    console.log(this.a);
    console.log(this);
}

// testThis();

// In the above code, when we call the function testThis(), the value of "this" inside the function refers to the global object (in a browser, it would be the window object). Since there is no property "a" defined on the global object, this.a will be undefined. The console.log(this) will log the global object itself.

// +++++++++++++++++++++ IN ARROW FUNCTION +++++++++++++++++++++++++++++

const userArrow = () => {
    let a = 10l
    console.log(this);
    console.log(this.a);
}

// userArrow();

// In the above code, when we call the arrow function userArrow(), the value of "this" inside the arrow function refers to the enclosing lexical context, which is the global object in this case. Since there is no property "a" defined on the global object, this.a will be undefined. The console.log(this) will log the global object itself.



