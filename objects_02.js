// object constructors

const user1 = new Object() // singleton
const user2 = {} // not singleton
console.log(user1)
console.log(user2)

user1.id = 123
user1.name = "Ekta"
user1.isLoggedIn = false

console.log(user1)

// defining an object inside another object
const user3 ={
    email : "unknowngmail.com" ,
    fullname : {
        useFullName : {
            firstName : "Unkown" ,
            lastName : "Name"
        }
    }
}
console.log(user3.fullname)
console.log(user3.fullname.useFullName)
console.log(user3.fullname.useFullName.firstName)
