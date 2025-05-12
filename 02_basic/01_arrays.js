// const arr = [1, 2, 3, 4, 5, 6, 7];
//arr.push(8);
//console.log(arr);
//arr.pop();

//console.log(arr.indexOf[6]);

//arr.unshift(10); //add new value in starting
//console.log(arr)

//arr.shift();  //remove from starting
//console.log(arr);

//const newarr= arr.join()
//console.log(typeof newarr)

//Slice , Spice
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log("A", arr);
const m1 = arr.slice(1, 3); //pheli s ly kr 3rd index tk ki value , LAST String include nhi hoti

console.log(m1);
console.log("B", arr);

const m2 = arr.splice(1, 3); //1 se ly kr 3 tk index dede, last string include hothi h
console.log("original", arr);
console.log(m2);
