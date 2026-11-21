//Numbers

const num_1 = 100
console.log(num_1)

const num_2 = new Number(200) // Creates an Obj of Number type
console.log(num_2)

console.log(num_2.toString().length)
console.log(num_2.toFixed(2))

const num_3 = 123.8934
console.log(num_3.toFixed(2))
console.log(num_3.toPrecision(3))

const num_4 = 100000
console.log(num_4.toLocaleString('en-IN')) // Default : US
console.log()

// Maths

console.log(Math) // Obj
console.log(Math.abs(-3))
console.log(Math.round(54.584))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.1))
console.log(Math.min(3,4,6,2,4,9,2,1))
console.log(Math.max(3,4,6,2,4,9,2,1))

console.log(Math.random())
console.log((Math.random() * 10 )+ 1)
console.log(Math.floor((Math.random() * 10 )+ 1))

const min = 10
const max = 20
console.log(Math.floor(Math.random() * ( max - min + 1)) + 10)