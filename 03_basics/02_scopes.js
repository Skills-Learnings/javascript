// var c = 300
let a = 300;
if (true) {
  let a = 30;
  const b = 20;
  // console.log("Inner: ", a); // Block scope
}

// console.log(a); // Global scope
// console.log(b);
// console.log(c);

function one() {
  const username = "sahil";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  // console.log(website);
  two();
}

// one()

if (true) {
  const username = "sahil";
  if (username === "sahil") {
    const website = "youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// +++++++++++++++++ interesting +++++++++++++++++

console.log(addone(5));  // This will run perfectly fine
function addone(num) {
  return num + 1;
}

addTwo(5);  // This will not run and will give error because it is being declared a  variable

const addTwo = function (num) {
  // This is also known as expression and it is just a technique of declaring functions.
  return num + 2;
};

