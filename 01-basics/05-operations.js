// operations

let value=3;
let negValue=-value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1="hello";
// let str2=" world";
// let str3=str1+str2;
// console.log(str3);

// console.log("1" + 2); // string + number -> "12"
// console.log(1 + "2"); // number + string -> "12"
// console.log("1" + 2 + 2); // left to right: "1"+"2"="12", "12"+2="122"
// console.log(1 + 2 + "2"); // left to right: 1+2=3, 3+"2"="32"

// console.log(3 + 4 * 5 % 2); // * and % before + 

// console.log(true); // prints true (boolean value)
// console.log(+true); // + converts boolean to number -> 1
// console.log(+""); // + converts empty string to number -> 0

let num1, num2, num3; 
num1 = num2 = num3 = 2 + 2; // assigns 4 to all, but not recommended (hard to read, confusing)

let gameCounter = 100;
gameCounter++;                 
console.log(gameCounter);   // 101 (postfix ++ increments after use, but here it's standalone)
console.log(gameCounter++); // prints 101, then increments to 102
console.log(gameCounter);   // 102 (value after previous increment)