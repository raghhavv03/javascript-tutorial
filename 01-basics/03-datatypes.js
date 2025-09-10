// datatypes in JavaScript

"use strict"; // treat all JS code as newer version

// alert(3+3); // we are using Node.js, not browser

// primitive datatypes
// Number
// BigInt
// String
// Boolean->true/false
// null->standalone value
// undefined->declared but not assigned
// Symbol->unique

// console.log(typeof(null)); // "object"->special case (historical bug in JS, null is actually a primitive)
// console.log(typeof(undefined)); // "undefined"

const score=100; // number (integer)
const scoreValue=100.3; // number (decimal/float)
const isLoggedIn=false; // boolean
const outsideTemp=null; // null (special standalone value)
let userEmail; // undefined (declared but not assigned)
const id=Symbol('123'); // symbol with description '123'
const anotherId=Symbol('123'); // another unique symbol with same description
// console.log(id===anotherId); // false -> every symbol is unique, even with same description
const bigNumber=4723749088310284n; // bigint
// console.log(typeof bigNumber); 

// non-primitive (reference) datatypes
// Objects
// Arrays
// Functions

const heroes=["iron-man","spiderman","thor"]; // array
let myObj={ // object (key-value pairs)
    name: "Raghav",
    age: 22,
};
const myFunction=function(){ // function (can be stored in a variable)
    console.log("hello world");
}; 

console.log(typeof(heros)); // "object" -> arrays are a type of object in JS
console.log(typeof(myObj)); // "object" -> objects return "object"
console.log(typeof(myFunction)); // "function" -> functions have their own typeof result

// memory
// stack (primitive)
// heap (non-primitive)

let myYouTubeName = "raghav-vlogs"; // primitive type (string) -> stored in stack (copied by value)
let anotherName = myYouTubeName; // copy of value "raghav-vlogs" is assigned to anotherName
anotherName = "raghav-travels"; // changing anotherName doesn't affect myYouTubeName
console.log(myYouTubeName); // "raghav-vlogs" -> original value remains unchanged
console.log(anotherName); // "raghav-travels" -> updated value of anotherName

let userOne = { // non-primitive (object) -> stored in heap, reference is kept in stack
    email: "user@gmail.com",
    upi: "user@ptsbi",
};
let userTwo = userOne; // userTwo gets the REFERENCE to the same object in heap
userTwo.email = "hello@gmail.com"; // updating userTwo also updates userOne (both point to same object)

console.log(userOne); // { email: "hello@gmail.com", upi: "user@ptsbi" }
console.log(userTwo); // { email: "hello@gmail.com", upi: "user@ptsbi" }