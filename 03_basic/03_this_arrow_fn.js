//this -> Current Context

const user = {
  name: "Devesh",
  price: 999,

  welcome: function () {
    console.log(`${this.name} welcome to website`);
    console.log(this);
  },
};

// user.welcome();
// user.name = "sam";
// user.welcome();

//console.log(this); //empty {}

// function chat() {
// let user= "devesh"
// console.log(this.user);
// }
// chat();

// const chai=function(){
//   let user = "devesh";
//   console.log(this.user);
// }

const chai = () => {
  let user = "devesh";
  console.log(this);
};

//console.log(chai);
//chai();

//arrow fn

// const add2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(add2(2, 2));

//Implisit Return

//const add2 = (num1, num2) => num1 + num2;
// const add2 = (num1, num2) => (num1 + num2)

const add2 = (num1, num2) => ({ username: "Devesh" });

console.log(add2(2, 2));
