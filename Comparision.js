// console.log( 2 == 1)
// console.log( 2 != 1) etc.

console.log("2"> 1) // Avoid comparing two different data types
console.log("01" == 1)

console.log(null == 0) // comparing two different data types gives unpredictable result
console.log( null > 0)
//console/log( null >= 0)

console.log( undefined >= 0) // comparing undefined with diff datatype always gives false

// === checks both equality and if both data types are the same
console.log("3" === 3)