// ARRAY
// We can put any type of value in an array. Array is an object.
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(Array.isArray(fruits)); // Output: true

// Accessing elements
console.log(fruits[0]); // Output: apple

// Modifying elements
fruits[1] = "mango";
console.log(fruits); // Output: ["apple", "mango", "orange", "grape", "kiwi"]

// Adding elements
fruits.push("pear");
console.log(fruits); // Output: ["apple", "mango", "orange", "grape", "kiwi", "pear"]

// Removing elements
fruits.pop();
console.log(fruits); // Output: ["apple", "mango", "orange", "grape", "kiwi"]

fruits.splice(2, 1); // Removes 1 element at index 2
console.log(fruits); // Output: ["apple", "mango", "grape", "kiwi"]


// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Do-while loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// For loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

// For...in loop
for (let index in fruits) {
    console.log(fruits[index]);
} 


// Looping through the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method
fruits.forEach(function(fruit) {
    console.log(fruit);
});