// conversions

// initial value is a number
let score = 33;
// console.log(typeof(score)); // "number"

// reassigning to a string
score = "33";
// console.log(typeof(score)); // "string"

// converting string to number
let valueInNumber = Number(score);
// console.log(typeof(valueInNumber)); // "number"

// invalid number string->conversion fails
score = "33abc";
valueInNumber = Number(score);
// console.log(valueInNumber); // NaN (Not a Number)

// converting null to number
score = null;
valueInNumber = Number(score);
// console.log(valueInNumber); // 0

// converting undefined to number
score = undefined;
valueInNumber = Number(score);
// console.log(valueInNumber); // NaN

// converting boolean to number
score = true;
valueInNumber = Number(score);
// console.log(valueInNumber); // 1 (true->1, false->0)

// boolean conversion
let isLoggedIn = 1;
let valueInBoolean = Boolean(isLoggedIn);
// console.log(valueInBoolean); // true (non-zero number->true)

isLoggedIn = "";
valueInBoolean = Boolean(isLoggedIn);
// console.log(valueInBoolean); // false (empty string->false)

isLoggedIn = "hello";
valueInBoolean = Boolean(isLoggedIn);
// console.log(valueInBoolean); // true (non-empty string->true)

// string conversion
score = 33;
let valueInString = String(score); // converts number to string
console.log(valueInString); // "33"
console.log(typeof(valueInString)); // "string"