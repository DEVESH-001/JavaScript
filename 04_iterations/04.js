// forEach

const coding = ["js", "java", "ruby", "python"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((val) => {
//   console.log(val);
// });

// function print(item){
//   console.log(item);
// }

// coding.forEach(print)

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const mycoding = [
  {
    langauageName: "javascript",
    languageFile: "js",
  },
  {
    langauageName: "java",
    languageFile: "java",
  },
  {
    langauageName: "cpp",
    languageFile: "C++",
  },
];

mycoding.forEach((item) => {
  console.log(item.languageFile);
});
