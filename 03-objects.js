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

// dynamically, add the value to the object
product.color = "blue";

// delete a property
delete product.price;



