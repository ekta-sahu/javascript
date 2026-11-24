// Array is a special type of object in JS, values of multiple data types can be stored
// in JS arrays are resizable
 
const arr_1 = [0,1,2,3,4,5,"Satroro","Gojo"]
console.log(arr_1[7]) // JS does not support negative indexing through [], can be accessed with .at()
// Shallow copy : variable points to the same reference value
// Deep copy : creates new array 

 const arr_2 = new Array(0,1,2,3,4,5)
// loacal array & array declared using new Array are stored in the memory in the same way
// Stack (arr) ---> Heap Memory(array)


// Array Methods
arr_1.push(6)
console.log(arr_1)
arr_1.pop()

arr_1.unshift(-1) // adds elememt to the start of the array
arr_1.shift() // removes element from the start of the array
console.log(arr_1)

console.log(arr_1.at(-1)) // works for both positive and negative indexing
console.log(arr_1.includes("Geto"))
console.log(arr_1.indexOf(10)) // returns -1 if element is not present

const new_arr_1 = arr_1.join()
console.log(new_arr_1)
console.log(typeof new_arr_1)
console.log()

// slice, splice
console.log("A : ", arr_1)
const arr_01 = arr_1.slice(1,3) // does not include the last range and does not remove the elements from the org array

console.log(arr_01)
console.log("B :",arr_1)

const arr_02 = arr_1.splice(1,3) // includes the last range and removes the elements from the org array
console.log(arr_02)
console.log("C :", arr_1)
