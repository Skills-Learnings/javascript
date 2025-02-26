const accountId = 1234;
let accountEmail = "test@gmail.com";
var accountPassword = "123456";
let accountState;

// It is possible to declare variable without let or const but it is not a good approach.
accountCity = "Jaipur"; 
// accountId = 2; // Not allowed

accountEmail = "sahil@gmail.com"
accountPassword = "579564"
accountCity = "Bengaluru"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope with var.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);