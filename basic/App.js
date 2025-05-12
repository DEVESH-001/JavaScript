//var x = 40;

//x++; //postfix 40
//x; //41

//++x; //pre-increment, update 1st and then return //42

// var x = "5";
// x = x + 1;
// console.log(x);

// var y = "5";
// y++;
// console.log(y);

// # Course Overview

// 1. Types - Primitve
// 2. Scope
// 3. Object

//undefined vs undeclared vc uninitialized

//undeclared : its never been created in any scope that we have access to.

//undefined : a variable & at the moment it has no value

//NAN : invalid number

//Object.is() static method determines whether two values are the same value.
//1/-Infinity=-0
//NAN != NAN

// if (!Object.is || true) {
//   Object.is = function ObjectIs(x, y) {
//     var xNegZero = isItNegZero(x);
//     var yNegZero = isItNegZero(y);

//     if (xNegZero || yNegZero) {
//       return xNegZero && yNegZero;
//     } else if (isItNaN(x) && isItNaN(y)) {
//       return true;
//     } else {
//       return x === y;
//     }

//     //***************
//     function isItNegZero(v) {
//       return v === 0 && 1 / v == -Infinity;
//     }
//     function isItNaN(v) {
//       return v !== v;
//     }
//   };
// }

// console.log(Object.is(14, 14) === true);
// console.log(Object.is(null, null) === true);
// console.log(Object.is(NaN, NaN) === true);
// console.log(Object.is(-0, -0) === true);

// console.log(Object.is("foo", "bar") === false);
// console.log(Object.is(undefined, null) === false);

//#Fundamental Objects
var yesterday = new Date("March,2, 2021");
yesterday.toUTCString();
console.log(yesterday);


