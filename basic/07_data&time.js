// let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,22)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 22,5,3);
// console.log(myCreatedDate.toLocaleString());

//convert to seconds
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

newDate.toLocaleString("default", {
  weekday: "long",
});

console.log(newDate);
