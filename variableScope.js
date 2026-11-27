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

console.log()

function one(){
    const firstName = "ekta"

    function two(){
        const lastName = "sahu"
        console.log(firstName)
    }
    // console.log(lastName) has local scope (only defined for two & it's inner functions)

    two()
}
one()

if(true){
    const firstName = "ekta"
    if(firstName === "ekta"){
        const lastName = " sahu"
        console.log(firstName + lastName)
    }
    // console.log(lastName)
}
// console.log(firstName)

console.log()

console.log(addOne(5))
function addOne(num){
    return num + 1
}

// console.log(addTwo(5)) Cannot access 'addTwo' before initialization --> Hoisting
const addTwo = function addTwo(num){
    return num + 2
}