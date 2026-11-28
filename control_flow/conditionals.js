// if
  // if( condition == true){
  // }
  
  // implicit scope(if)
  const balance = 1000
  if( balance > 500) console.log("test"), console.log("test2")
    console.log("test3"); // not easily readable , avoid this syntax

// if - else
    // if( condition ){
    //  } else{
    //  }

// if - else if - else
    // if ( condition ){
    //   } else if( condition ){
    //   } else {
    //   }

// Nullish Coalescing Operator (??) -- null , undefined

let val1;
// val1 = 10 ?? 5
// val1 = null ?? 5
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 5

console.log(val1)

// Terniary Operator
//   condition ? true : false
const age = 17
age >= 18 ? console.log("eligible to vote") : console.log("not eligible to vote")

