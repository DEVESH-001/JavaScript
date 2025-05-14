for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("Sher hi keh d")
  }
  //console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //console.log(`outher loop : ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`inner loop : ${j}`);
    //console.log(i + "*" + j + "=" + i * j);
  }
}

let array = ["flash", "batman", "superman"];
//console.log(array.length);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  //console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log("detected 5");
//     break;
//   }
//   console.log(`value of i is  ${index}`);
// }

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log("detected 5");
//     continue;
//   }
//   console.log(`value of i is  ${index}`);
// }

// while
let index = 0;
while (index <= 10) {
  //console.log("sher");
  index++;
}

let myarray = ["bat", "sher", "super"];
let arr = 0;
while (arr < myarray.length) {
  //console.log(`value is ${myarray[arr]}`);
  arr++;
}

let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
