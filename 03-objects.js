// an object lets us group and use multiple values together in a single variable
const product = {
    name: "Socks",  // name is property of the object product
    price: 1090,
    rating: {
        stars: 4.5,
        reviews: 100
    },
    func: function() {  // func is also a value
        console.log("This is a function inside an object");
    }
};

// product2 is a reference to product NOT A COPY. changing product2 will also change product
const product2 = product;

// true. because they are both pointing to the same object in memory
// though we cant compare two objects even if they have same values itll return false 
product2 === product;

// bracket notation lets us use properties that normally would not be valid identifiers
product["weird property"] = "weird value";

// access the value of a property
console.log(product.name);
console.log(product["weird property"]);
console.log(product.rating.stars);

// function inside object == Method
product.func();

// change the value
product.name = "Shoes";

// dynamically, add the value to the object if it doesnt exist
product.color = "blue";

// delete a property
delete product.price;

// auto - boxing (automatically wraps strings, nums, booleans into an object)
"string".length;
"string".toUpperCase;

// destructuring lets us extract values from an object and store them in variables
const color = product.color;    // color = blue
const {color, name} = product;     // color = blue, name = "Shoes"

// shorthand
product3 = {
    // color: color,
    color,
    // method: function function1 () {
    //     console.log("hello");
    // }
    method() {
        console.log("hello");
    }
}