const tinder = {};
tinder.id = "123";
tinder.name = "devesh";
tinder.isLoggedIn = false;

//console.log(tinder)

const regularUser = {
  email: "sher@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Dvsh",
      lastName: "Yafadv",
    },
  },
};

//console.log(regularUser.fullName.userFullName.firstName)

//merging object like as we do in array, its different in objs

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

//const obj3 ={obj1,obj2}
const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3);

const obj4 = { ...obj1, ...obj2 };
//console.log(obj4)

// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(tinder.hasOwnProperty("isLoggedsasasIn"));

//destructuring

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "devesh",
};

const { courseInstructor } = course;
console.log(courseInstructor);

//json api response

[{},{},{}]
