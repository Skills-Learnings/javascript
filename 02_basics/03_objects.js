// singleton
// Object.create()

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Sahil",
    "full name": "Sahil Gidwani",
    [mySym]: "mykey1",  // Scenario where we have to add symbol as key in object then we have to add it in square brackets
    age: 18,
    location: "Jaipur",
    email: "sahil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}


// Accessing object values
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  // Object values can also be accessed by square brackets in some use cases.
// console.log(JsUser[mySym])

JsUser.email = "sahil@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sahil@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello JS user");
}

JsUser.greeting2 = function () {
    console.log(`Hello ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
