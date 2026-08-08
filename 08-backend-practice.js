// XMLHttpRequest - to send an http request to a server and receive a response. It is commonly used in web development to make asynchronous requests to retrieve data without refreshing the entire page.

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://supersimplebackend.dev");


// we should add an event listener before sending the xhr request
xhr.addEventListener('load', () => {    // [load, error etc]
    xhr.response    // not undefined
})

// xhr.send is a asynchronous code meaning it does not wait for this line of code to finish. the program immediately goes to the next line
xhr.send();

// it takes time to send an http request and get back the response so `response = undefined` initially unless we use eventListeners
xhr.response    // undefined


// The backend can respond with various type of data such as [text/plain, application/json, text/html]
// We can use JSON.parse() to convert the JSON into JS Object. This allows us to send JS Objects across the internet through the backend
// Our browser by default also sends GET requests to the backend in a similar way and displays the Response in the window.



// PROMISE - runs a code immediately
// promise makes its own thread and runs the code in that thread. It does not block the main thread.
// promise splits our code into seperate steps and lets us wait for a step to finish before moving to the next step
new Promise((resolve) => {
    console.log("start promise");
    functionThatTakesTimeToRun();
    resolve("promise resolved");    // resolve lets us control when to go to next step

}).then((value) => {  // whatever we give as an argument in resole() it is passed as an argument to the next step in then()
    return new Promise((resolve) => {
        console.log("start promise 2");
        functionThatTakesTimeToRun();
        resolve("promise 2 resolved");
    })

}).then((value) => {
    console.log("end of promise");
})

console.log("end of code");

// Why promise? We can use callbacks. - because callbacks cause a lot of nesting and callback hells. if we have a lot of things to load from internet then we have to nest it one inside another
// Promises help keep our code flat and avoid nesting

// We can run multiple promises in parallel using Promise.all() and wait for all of them to finish before moving to the next step. This is useful when we have multiple independent tasks that can be executed simultaneously.

Promise.all([
    new Promise((resolve) => {
        console.log("start promise 1");
        functionThatTakesTimeToRun();
        resolve("promise 1 resolved");
    }),
    new Promise((resolve) => {
        console.log("start promise 2");
        functionThatTakesTimeToRun();
        resolve("promise 2 resolved");
    })
]).then((values) => {   // values = ["promise 1 resolved", "promise 2 resolved"]
    console.log("all promises resolved", values);
});