const user ={
    username : "ekta",
    entryPrice : 999,
    
    welcomeMessage : function() { // this refers to the current context
        console.log(`${this.username} welcome to our webstie.`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "spiderman"
user.welcomeMessage()

console.log(this) // returns an empty object in node.js , in browser it returns a window object
console.log( typeof this )  // object

function example(){ // this cannot be used in the context of a function
    const username = "ekta"
    console.log(this) // console.log(this.username)
}
example()

// Arrow function : an arrow function is a shorter way to write a function in JavaScript.

// const example1 =function(){
//     const username = "ekta"
//     console.log(this)
// }

const example1 = () =>{
    const username = "ekta"
    console.log(this.username)
}
example1()

// explicit return

const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(1,6))

// implicit return

const add1 = (num1, num2) =>( num1 + num2)
console.log(add1(1,6))

const obj = () => ({ username : "ekta", age : 18})
console.log(obj())

// for {} --> write return keyword, for () --> no need to write return keyword
