// constructors --> singleton
// literals --> non-singleton

// object literals

const symb = Symbol("key1")

const harry ={
    name : "Harry Potter" ,
    "anotherName" : "The Choosen One" ,
    [symb] : "mykey1" , // symbol
    age : 18 ,
    location : "London" ,
    email : "harry@gmail.com" ,
    isLoggedIn : false ,
    workingDays : ["Monday", "Tuesday", "Saturday"]
}
// console.log(harry.email)
console.log(harry["email"])
console.log(harry["anotherName"])
console.log(harry[symb])

harry.email = "harry@chatgpt.com" // modify values

// Object.freeze(harry) // does not allow changes 
// harry.email = "harry@google.com"
// console.log(harry["email"])

console.log(harry)

harry.greeting = function(){
    console.log("Hello Harry Potter");
}
console.log(harry.greeting())

harry.greeting_1 = function(){
    console.log(`Hello ${this.name}`);
}
console.log(harry.greeting_1())
