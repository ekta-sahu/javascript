const date_1 = new Date() 
console.log(date_1.toString())
console.log(date_1.toDateString())
console.log(date_1.toISOString())
console.log(date_1.toJSON())
console.log(date_1.toLocaleString())
console.log(date_1.toLocaleDateString())
console.log(typeof date_1)
console.log(typeof Date)

const myCreatedString = new Date(2026, 10, 21, 7, 50) // Month : 0 - 11
console.log(myCreatedString.toLocaleString())

const myCreatedString_1 = new Date("2026-11-21") // Month : 1 - 12
console.log(myCreatedString_1.toLocaleString())
console.log(myCreatedString_1.getTime()) // time in miliseconds from 1 jan 1970

 let myTimeStamp = Date.now()
 console.log(myTimeStamp) // time in miliseconds from 1 jan 1970
 console.log(Math.floor(myTimeStamp/1000)) // converting time from miliseconds to seconds

 let newDate = new Date()
 console.log(newDate.getMonth() + 1) // get___() function

 newDate.toLocaleString('default',{
    weekday : "long"
 })