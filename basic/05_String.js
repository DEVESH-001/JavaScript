const name = "Deveh";
const repoCount = 50;
console.table(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gamename = new String("Devesh")
console.log(gamename.length)
console.log(gamename.includes('v'))
console.log(gamename.charAt(2))
console.log(gamename.indexOf("v"))
console.log("------------------")

const newString = gamename.substring(0,3) //last char will not include
console.log(newString)

const anotherString = gamename.slice(-8,4)
console.log(anotherString);

const newStringOne = "  devehs  "
console.log(newStringOne.trim())

const url = "https://devesh.work%20s"
console.log(url.replace('%20','-'))