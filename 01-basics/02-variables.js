// variables in JavaScript

// assigning variables in JavaScript
// 'const'->used for constants, values cannot be reassigned after initialisation
const accountId=123;
// 'let'->used for block-scoped variables, values can be changed later
let accountEmail="raghav@gmail.com";
// 'var'->function-scoped (older way of declaring variables, not recommended)
var accountPassword="Raghav@123";
// if we don’t use let/const/var, the variable becomes GLOBAL (not a good practice)
accountCity="Jaipur";  
// declared with let but not initialized->value is 'undefined' by default
let accountState;

// trying to reassign values
// accountId = 2; // not allowed because 'accountId' was declared with 'const'
// allowed->'let' and 'var' variables can be reassigned
accountEmail="deep@gmail.com";     
accountPassword="Deep@123";       
accountCity="Bengaluru";          

// output
// prints a single value to console
console.log(accountId);
// prints multiple values in table format (easy to read)
console.table([accountEmail,accountPassword,accountCity,accountState]);