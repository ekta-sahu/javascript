let value = 12
let negValue = -value
console.log(negValue)

// Arithmetic Operations
console.log(2+2)
console.log(1-2)
console.log(10*3)
console.log(144/12)
console.log(2**3)
console.log(10%3)

// String Concatenation
let str1 = "Tony"
let str2 = " Stark"
console.log(str1 + str2)

// Forced Conversions
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2) // JS is a weakly typed language ( forced conversions )
console.log(1 + "2" + "2") // Definently do not write code like this , resulting in bugs for bigger programs 

console.log(((5 + 1) * 2 ) % 3) // console.log( 5 + 1 * 2 % 3) => not readable

// console.log(+true) =>1
// console.log(1+"") =>1

let score = 90
score++ // postfix increament operator
console.log(score)

let score1 = 90
++score1 // prefix increament operator
console.log(score1)
