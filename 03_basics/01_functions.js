function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("H");
  console.log("I");
  console.log("L");
}

// sayMyName // this is function reference
// sayMyName() // this is function execution with parenthesis

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2
    // return result

    return num1 + num2;
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username="Sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sahil"))

// When value is not passed then it is undefined and not null.
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) { // Here ... is rest operator not spread operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 200));

const user = {
    username: "sahil",
    prices: 199 // Prices will give undefined because in function we using price not prices
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 1000, 600]));


