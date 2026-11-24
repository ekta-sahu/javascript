// Stack( Primitive ), Heap ( Non Primitive)

let myName = "Tom Riddle" // stored in the Stack memory

let myAnotherName = myName
myAnotherName = "Voldemort"

console.log(myName)  // Returns the copy of the original string in the stack
console.log(myAnotherName)

let theChoosenOne = { // Stored in the heap memory with reference in the stack
    name : "Harry Potter",
    anotherName : "the Choosen One"
}

let theChoosenOne_2 = theChoosenOne // points to the same reference in the heap
theChoosenOne_2.anotherName = "the Reseracted Child"

console.log(theChoosenOne == theChoosenOne_2)
console.log(theChoosenOne)
console.log(theChoosenOne_2)