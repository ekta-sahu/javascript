// truthy values behave like true when evaluated in a condition.
// falsy values behave like false when evaluated in a condition.


const userEmail = "" // --> false , "user@gmail.com" --> true

if( userEmail ){
    console.log("Got user email.")
} else{
    console.log("Don't have user emil.")
}

// falsy values :
//     false , 0, -0, BigInt 0n, "", null undefined, NaN

// truthy values :
//     "0", "false", " ", [], {}, function(){}

const arr = []
if( arr.length === 0){
    console.log("Empty array.")
} else{
    console.log("Array is not empty.")
}

const obj = {}
if (Object.keys(obj).length === 0){
    console.log("Empty object.")
} else {
    console.log("Object is not empty.")
}