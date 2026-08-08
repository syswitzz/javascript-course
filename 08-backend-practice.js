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