// Conversion to Number

let age = "18"
console.log(typeof age)

let valueInNumber = Number(age)
console.log(typeof(valueInNumber)+"\n") 

// Nan

let marks = "85abc"
console.log(typeof marks)

let valueInNumber1 = Number(marks)
console.log(typeof valueInNumber1)
console.log(valueInNumber1+"\n") // NaN = Not a number

// Null => 0
let heartRate = null
console.log(typeof heartRate)

let valueInNumber2 = Number(heartRate)
console.log(typeof valueInNumber2)
console.log(valueInNumber2+"\n")  

// Undefiened => NaN
// Boolean => true : 1, false: 0
// String => NaN

// Conversion to String
let name = 123
console.log(typeof name)

let valueInString = String(name)
console.log(typeof valueInString)
console.log(valueInString+"\n")

// Conversion to Boolean
let isLoggedIn = 1
console.log(typeof isLoggedIn)

let valueInBoolean = Boolean(isLoggedIn) // 1 => true, 0 => false
console.log(typeof valueInBoolean)
console.log(valueInBoolean+"\n")

let isLoggedIn1 = "Ekta"
console.log(typeof isLoggedIn1)

let valueInBoolean1 = Boolean(isLoggedIn1) // "Ekta" or 123 => true
console.log(typeof valueInBoolean1)
console.log(valueInBoolean1+"\n")

let isLoggedIn2 = ""
console.log(typeof isLoggedIn2)

let valueInBoolean2 = Boolean(isLoggedIn2) // "" => false
console.log(typeof valueInBoolean2)
console.log(valueInBoolean2+"\n")
