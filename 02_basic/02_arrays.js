const marvel_heros = ["thor", "ironmae", "shermam"];
const dc = ["superman", "flash", "batman"];

//marvel_heros.push(dc);
// console.log(marvel_heros);
// console.log(marvel_heros[2]);

//const sher = marvel_heros.concat(dc); //good way
//console.log(sher);

//  SPREAD operator //BEST WAY

//const newhero = [...marvel_heros, ...dc];
//console.log(newhero);

// const another = [1, 2, 3,[(4, 5, 6)], 7, 8, 9];
// const real = another.flat(Infinity)    //[(1, 2, 3, 6, 7, 8, 9)];
// console.log(real)

console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]

let score1  = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))