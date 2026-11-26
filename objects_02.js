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

// merging objects

const obj1= {1 : "a", 2 : "b"}
const obj2= {3 : "a", 4 : "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)

// database / list of users
const users =[
    {
        id : 11,
        email : "123@gmail.com"
    },
     {
        id : 12,
        email : "124@gmail.com"
    },
     {
        id : 13,
        email : "125@gmail.com"
    }
]
console.log(users[0].email)

console.log(user1)
console.log(Object.keys(user1))
console.log(Object.values(user1))
console.log(Object.entries(user1))
console.log(user1.hasOwnProperty('isLoggedIn'))