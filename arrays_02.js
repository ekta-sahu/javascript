const marvel = ["Spiderman", "Ironman", "Thor","Captain America"]
const dc = ["Batman", "Superman", "Wonder Women", "Flash"]

marvel.push(...dc)  // writing only marvel.push(dc) will add the dc array as a single element
console.log(marvel) // does not return a new arrays, modifies existing array

const marvel_1 = ["Spiderman", "Ironman", "Thor","Captain America"]
const allHeros = marvel_1.concat(dc) // does nor modift original array, returns new array
console.log(allHeros) 

const jjk = ["Gojo", "Geto", "Shoko"]
const jjk_1 = ["Yuji", "Fushiguro", "Nobara"]
const jjk_all = [...jjk, ...jjk_1] // spread
console.log(jjk_all)

const arr = [1, 2, 3, [4, 5], 6, [6, [7,8]],9]
const arr_1 = arr.flat(3) // depth --> .... Infinity
console.log(arr_1)

console.log(Array.isArray("Voldemort"))
console.log(Array.from("Voldemort"))

console.log(Array.from({name : "Voldemort"})) // specify : key or value

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // returns a new array