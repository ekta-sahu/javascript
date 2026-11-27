// Object De-structuring
  //Object destructuring is a way to extract properties from an object and store their 
  // values in separate variables without accessing each property individually.

const character = {
    name : "Yuji Itadori" ,
    age : 17 ,
    type : "cursed Spirit" ,
    hasFriends: true
}

// console.log(character.name) --> without object destructuring

// const {name} = character --> with object destructuring
// console.log(name)

const {name, age, type, hasFriends : friends}  = character 
console.log(name)
console.log(age)
console.log(type)
console.log(friends)

// JSON (JavaScript Object Notation) is a lightweight, text-based format for 
// storing and exchanging structured data.

// {
//     "name" : "ekta" ,
//     "id" : 1,
//     "age" : 18
// }

// [
//     {},
//     {},
//     {}
// ]