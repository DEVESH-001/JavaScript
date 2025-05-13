//{}
// let a = 100;
// if (true) {
//   let a = 10;
//   const b = 20;
//   console.log(a);
// }

// console.log(a);
// //console.log(b);

function one() {
  const username = "Dev";
  function two() {
    const website = "youtune";
    console.log(username);
  }
  //console.log(website);
  two();
}
//one();

if (true) {
  const username = "devesh";
  if (username === "devesh") {
    const website = "youtube";
    //console.log(username + website);
  }
  //console.log(website);
}

//console.log(username);
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

console.log(addTwo(5)); //This will give error
const addTwo = function (num) {
  return num + 2;
};
//addTwo(5);
