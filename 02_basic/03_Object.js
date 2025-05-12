// singleton : ?

// object literals
const mySum = Symbol("key1");

const JsUser = {
  name: "Devesh",
  age: "Alwar",
  [mySum]: "key1",
  email: "devesh@clik.ai",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"],
};

//console.log(JsUser["fullName"]);
console.log(JsUser[mySum]);

JsUser.email = "Chat#gmai.com";
console.log(JsUser.email);

JsUser.greeting = function () {
  console.log("Sher hi keh d");
};
console.log(JsUser.greeting);
