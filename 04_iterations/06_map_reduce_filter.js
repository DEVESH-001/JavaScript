// const coding = ["js", "ruby", "java", "python"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);

// Filter

//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });

//or

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

//const numbers = [1, 2, 3, 4, 5, 6, 7];

//const newNums = numbers.map((num) => num + 10);

// Chaining

// const newNums = numbers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);

// console.log(newNums);

// Reduce

//const mynum = [1, 2, 3];

// const myTotal = mynum.reduce(function (acc, curVal) {
//   console.log(`acc: ${acc} and curValu: ${curVal}`);

//   return acc + curVal;
// }, 0);

//const myTotal = mynum.reduce((acc, curr) => acc + curr, 0);

//console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "reactJS course",
    price: 4999,
  },
  {
    itemName: "Python course",
    price: 3999,
  },
  {
    itemName: "data Science course",
    price: 3999,
  },
];

const totalPriceToPAY= shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPriceToPAY);

