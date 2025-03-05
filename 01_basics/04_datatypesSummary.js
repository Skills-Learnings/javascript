// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 5796126713579845248975625154n;


// Reference Type (non primitive)

// Array, Objects, Functions 
const heroes = ["Shaktimaan", "Naagraj", "Doga"];

let myObj = {
    name: "Sahil",
    age: 22
};

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "sahilgidwani"

let anotherName = myYoutubeName

anotherName = "hello"

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "sahil@google.com"

console.log(userOne);
console.log(userTwo);
