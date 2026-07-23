// Functions can be stored in a variable. This is called a function expression. The function can be named or anonymous.
// Though, these functions are not hoisted, meaning they cannot be called before they are defined.

const function1 = function greeting() {
    console.log("Hello world!");
}

console.log(function1); // Output: [Function: greeting]
function1(); // Output: Hello world!


// Function saved inside an object is called a method. The 'this' keyword refers to the object that the method is called on.
const object1 = {
    name: "John",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

object1.greet(); // Output: Hello, my name is John


// Passing a function as an argument to another function is called a callback function.
function greet(callback) {
    const name = "Alice";
    callback(name);
}

greet(function(name) {
    console.log("Hello, " + name);
}); // Output: Hello, Alice


// Timeout - run function after a certain time. setTimeout(function, time in ms). Immediately goes to the next line (asynchronous)
setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);


// Interval - run function repeatedly after a certain time. setInterval(function, time in ms). also (asynchronous). 
// setInterval returns an interval ID which can be used to stop the interval using clearInterval(intervalId)
let count = 0;
const intervalId = setInterval(function() {
    console.log("This message is displayed every 1 second");
    count++;
    if (count === 5) {
        clearInterval(intervalId); // Stop the interval after 5 times
    }
}, 1000);


// Regular functions
const regularFunction = function(name) {
    console.log("Hello, " + name);
}

// Arrow functions - a shorter syntax for writing functions. Use when passing a function as an argument or when you want to preserve the 'this' context. Arrow functions do not have their own 'this' context, they inherit it from the parent scope.
const arrowFunction = (name) => {
    console.log("Hello, " + name);
}

// Arrow functions with a single parameter can omit the parentheses
const oneParam = name => {
    console.log("Hello, " + name);
}

// Arrow functions with a single expression can omit the curly braces and the return keyword
const oneLine = (name) => console.log("Hello, " + name);


// Objects can have arrow functions but its preffered to use shorthand
const object2 = {
    name: "Alice",
    greet: () => {
        console.log("Hello, my name is " + this.name); // 'this' does not refer to object2 here, it refers to the global object (window in browsers)
    },
    greetShorthand() {
        console.log("Hello, my name is " + this.name); // 'this' refers to object2 here
    }
};


// addEventListener - Gives the ability to add or remove multiple event listeners to an element. 
const Button = document.getElementById("eventListenerButton");

const eventListenerFunction = () => {
    console.log("Button clicked!");
}

Button.addEventListener("click", eventListenerFunction);

Button.addEventListener("click", eventListenerFunction); // Adding the same function again will not add it again, it will be ignored

Button.removeEventListener("click", eventListenerFunction); // Removes the event listener


// addEventListener provides with an event object eg.,
document.body.addEventListener("onkeydown", (event) => {    // event must be passed as a param
    console.log(`${event.key}`);
});


// filter() - works same as forEach.
// 1. creates a new array
// 2. if function repetition returns true, the value is added to the new array else vice-versa
const positiveArray = [1, -2, -3, 5].filter((value, index) => {
    /*if (value > 0) {
        return true;
    }
    return false;*/
    return value >= 0;   // Shorter version of the above code
})


// map() - works same as forEach.
// 1. creates a new array
// 2. the value returned by the function repetition is added to the new array
const doubleArray = [1, 2, 3, 4].map((value, index) => {
    return value * 2;
})

const doubleArrayShort = [1, 2, 3, 4].map(value => value * 2);   // Shorter version of the above code