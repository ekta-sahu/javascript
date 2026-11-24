"use strict"; //treats all the codes in this file as newer version of JS

// alert("Hello") // inbuilt function in JS, used to display popups in browser or display warnings,messages.

// JavaScript is a Dynamically & Weakly (forced impilicit conversions) Language

let name = "Ekta" //String
let age = 18 // Integer
let isHuman = "True" // Boolean

/* Primitive Data Types: 
 Number
 BigInt
 String => ""
 Boolean => True or False
 Null => Standalone value
 Undefined
 Symbol => Unique
*/

console.log(typeof "Ekta")
console.log(typeof age)
console.log(typeof null) // Null is considered as Object  type
console.log(typeof undefined) // But Undefines is considered as a Data Type

let bigInteg = 327482738732n
console.log(typeof bigInteg)

const id_1 = Symbol("123")
const id_2 = Symbol("123")
console.log( id_1 == id_2)

/* Non Primitive/ Reference Data Types
  Array
  Object
  Functions
*/

const theAvengers = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"]
console.log(typeof theAvengers)
console.log(theAvengers)

const bat = {
    name :"Bruce Wayne",
    callName :"Batman",
    Genre :  "DC"
}
console.log(typeof bat)
console.log(bat)

function  topGun(){
    console.log("Call Name : Mavrick, Onduty!")
}
console.log(typeof topGun)
topGun()
 

