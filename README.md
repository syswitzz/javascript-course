computers cant properly store some floating point numbers
- its best practice to use cents instead of dollars to calculate money

Math.round(2.8)
- it'll round to 3
- 2.5 rounds to the higher number 3

alert("Hello World!);

typeof 
- typeof 2 gives 'number'
- typeof "hello" gives 'string'

'hello' + 3 
- 'hello3'

escape characters
- \'
- \"
- \n

`hello`
- strings created by backtick are called template string
- interpolation: insert value directly in a string, alt. to concatenation
- `Items (${1 + 3})`
- multiline string: backtick is equivalent to ''' in python

HTML 
- newline is considered as 1 space

// comment or /* multiline comment */

VARIABLE
- let: allows changing of values later
- const: doesnt allow changing of value
- var: same as let; but not used in modern JS
- only $, _ special chars allowed
- not start with number
- no reserved keywords
- cannot use '-' symbol. eg, cart-quantity

quantity = quantity + 2
- quantity += 2; 
- quantity++;

OPERATORS
- == is replaced by ===
- != is replaced by !==
- == or != tries to convert the values to same datatype 
- eg, 5 == '5.00' returns true
- while 5 === '5.00' returns false
- lower priority than math

Math.random()
- generates a number such that (0 <= number < 1)

SCOPES
- a scope limits where a variable exists
- if statement creates a scope
- any variable inside {} will only exist inside that {}
- scopes helps avoid naming conflicts
- var doesnt follow the rules of scope

BUILT IN OBJECTS
- console
- Math
- JSON
- localStorage

JSON (javascript object notation)
- used to convert JS Objects to JSON and vice versa
- similar to JS Objects but has less features (single quotes, functions not allowed)
- JSON.stringify(Object) = JSON 
- JSON.parse(JSON) = Object


localStorage 
- save values permanently, doesnt get deleted when page is refreshed
- only supports string
- localStorage.setItem("msg", "hello world!")
- localStorage.getItem("msg")
- localStorage.removeItem("msg")


null vs undefined
- null = intentionally want something to empty, it is a value
- undefined is not a value. we cant pass it as function parameter


Event Listeners 
- clicks & keydowns = events
- onclick & onkeydown = event listener
- onkeydown: acts when key pressed
- onscroll: scrolling
- onmouseenter: hovering over
- onmouseleave: stop hovering over
- every event listener gives us an "event" object which can be used to find which key was pressed etc


HTML Data Attribute
- has to start with "data-" followed by any name
- eg, data-product-name = "Basketball"
- JS (.dataset) property gives access to all the data attributes attached to the html element
- to access use "button.dataset.productName" (the name gets converted to camel case)


JS Modules (allows to get a variable out of a file without preventing naming conflicts)
- we need to use liveserver to use this feature
- order of script tag really matters and its hard to manage on big projects thats why we use modules
- <script src="scripts/amazon.js" type="module"></script>
- export const cart = [];
- import {cart as myCart} from "..";
- import * as cartModule from "..";


DeDuplicating/ Normalising the data
- it is the practice where we use productId to get information about the product from pre existing data while noting that productId is only used to track the quantity of the item

../ - previous folder
./ - current folder


HTML Radio selectors
- if the radio selectors have the same name attribute we can only select one of them

DOM (.remove) method
- document.querySelector(.class).remove()


External Libraries 
- code written by other developers that we can use
- <script src="https://someurl"></script>
- generally we load external libraries first


DayJS Library 
- helps us work with dates
- <script src="https://unpkg.com/dayjs@1.11.21/dayjs.min.js"></script>
- today = dayjs();
- overmorrow = today.add(2, 'days');
- format = overmorrow.format('dddd, MMMM D')

Format Table
- dd: Su
- ddd: Sun
- dddd: Sunday
- H: 0-23
- M: 1-12
- MM: 01-12
- MMM: Jan-Dec
- MMMM: January-December
- D: 1-31


- to use import statements in a js file. we have to declare that its a module in the corresponding html file
- even after that, we still must use `export` statement in whatever we are importing
- external libraries can be imported using the `script` tag and `src` attribute 
- but to avoid naming conflicts we import the esm version directly into the JS file without using any script tags
- `import dayjs from "url";` [url = ESM version of the module eg, (https://unpkg.com/dayjs@1.11.21/esm/index.js)]
- we used dayjs instead of {dayjs} because we are using default import here. it imports the default function that was declared using the syntax `export default function1;` in the external library file
- some libraries use named exports and some use default exports