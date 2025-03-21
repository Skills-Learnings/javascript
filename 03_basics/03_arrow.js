const user = {
    username: "sahil",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
          
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // This global object will be empty when we are in node environment and in browser it will be window object.

// function one() {
//     let username = "sahil"
//     console.log(this.username);  // It will give undefined because this current context works in object not in functions.
// }

// one()

// const one = function () {
//     let username = "sahil"
//     console.log(this.username); // here also this will give undefined
// }

const one = () => {
    let username = "sahil"
    console.log(this);  // in arrow function here it will give empty object
}


// one()

// const addTwo = (num1, num2) => {  // Basic arrow function
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2  // Implicit return usefull when there is only one line.
// const addTwo = (num1, num2) => (num1 + num2)  // In curly braces return keyword is compulsory, but in parentheses return keyword is not used.

const addTwo = (num1, num2) => ({username: "sahil"})  // Note: object can't be return without parentheses


console.log(addTwo(3, 4));

