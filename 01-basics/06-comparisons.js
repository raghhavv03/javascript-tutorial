// comparisons

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1); // true -> "2" is converted to number 2, 2>1
// console.log("02">1); // true -> "02" is converted to number 2, 2>1
// // avoid such implicit conversions, always compare values of the same datatype

// console.log(null>0); // false -> null becomes 0 in comparison, 0>0 is false
// console.log(null==0); // false -> equality check does not convert null to 0
// console.log(null>=0); // true -> null becomes 0, so 0>=0 is true

console.log(undefined > 0);   // false -> undefined becomes NaN, any comparison with NaN is false
console.log(undefined == 0);  // false -> undefined is only loosely equal to null, not 0
console.log(undefined < 0);   // false -> NaN again, so comparison is false
console.log(undefined == null); // true -> special case in JS: undefined and null are loosely equal

console.log("2" === 2); // false -> strict equality (===) checks value+type, string!==number