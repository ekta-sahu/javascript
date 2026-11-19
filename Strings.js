const name = "Harry"
const bestFriends = 2

console.log(`Hii my name is ${name} and i have ${bestFriends} best friends.`) // ` ` - Back Ticks

const gameName = new String("Hunger-Games")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf('u'))
console.log(gameName.split(""))
console.log(gameName.split("-"))

let gameNameSub = gameName.substring(0,6) // does not obey negtive values
console.log(gameNameSub)

let gameNameSub_1 = gameName.slice(-12,-6) // accepts negative values also
console.log(gameNameSub_1)

let name_1 = "  Ron  "
console.log(name_1.trim()) // trim(), trimStrat(), trimEnd()

let url_1 = "https://ektasahu.com/%20home"
console.log(url_1.replace("%20","#"))
console.log(url_1.includes("ekta"))

