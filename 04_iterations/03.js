// for in

const myObject = {
  js: "Javascript",
  cpp: "C++",
  swift: "swift",
};

for (const key in myObject) {
  //console.log(`${key} shortcut for ${myObject[key]}`);
}

const programing = ["js", "rb", "py", "cpp"];

for (const key in programing) {
  console.log(programing[key]);
}
