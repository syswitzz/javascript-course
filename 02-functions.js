// naming rules for function and parameters are same as variables
// define function in script element so that it loads first; then use onlick

function greet() {
    console.log("Hello there!");
}
greet();

function greetWithName(firstname, lastname = "Kumar") {
    console.log(`Hello ${firstname} ${lastname}!`);
}
greetWithName("John");