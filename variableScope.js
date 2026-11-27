var c = 300 // global scope
let a = 100
if(true){ // block scope
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner a :",a)
}

console.log("Outer a :",a)
// console.log(b)
console.log(c) // avoid using var