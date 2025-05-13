// function add2Num(a,b){
//   console.log(a+b)
// }

// function add2Num(a, b) {
//   return a + b;
// }

// const result = add2Num(2, 1);
// console.log(result);

// function loginUserMsg(username) {
//   if(!undefined){
//     console.log("User name dal ")
//   }
//   return `${username} just loggedIN`;
// }

// //console.log(loginUserMsg("DEVESH"))
// console.log(loginUserMsg("sam"));

//REST OPERATOR
function calculateCarPrice(...num1) {
  return num1;
}

console.log(calculateCarPrice(2, 22, 33));

const user = {
  username: "Devesh",
  price: 199,
};
function handleObject(anyobject) {
  console.log(
    `usename is ${anyobject.username} and price is ${anyobject.price}`
  );
}
//handleObject(user);

//other way
handleObject({
  username: "sam",
  price: 399,
});

const mynewArr = [200, 400, 600];

function returnSecondValue(gettArray) {
  return gettArray[1];
}
console.log(returnSecondValue(mynewArr));
