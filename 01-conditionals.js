let age = 18;

if (age > 18) {
    console.log("You can drive!")
} else if (age === 18) {
    console.log("Almost old enough but not there yet :)")
} else {
    console.log("You can't drive.")
}

true && false // false
true || false // true
!true // false

// FALSY VALUES - false, 0, Nan, '', undefined, null
// TRUTHY VALUES - everything except FALSY  

'text' / 5 // Nan - not a number
let variable; // undefined. can only do this with let const requires a value


// Ternary Operator (condition ? ifTrue : ifFalse)
`benefit of this is that we can store it in a variable`
const result = age > 18 ? "You can drive!" : "You can't drive.";

// Guard Operator (&&)
const result = false && console.log("Short circuit");    // result = false
const demo = 1 && "hello";   // "hello" is saved inside demo

`the 2nd condn doesnt even run because the first is already false.`

// Defaulr Operator (||)
`also stops early, if first is true, i.e., short circuit`
const currency = "EUR" || "USD";    // use case. sets default currency USD if EUR cant be selected



