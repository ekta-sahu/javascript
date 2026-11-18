const accountId = "101"
let accountEmail = "ektsahu@gmail.com"
var accountPassword = "12345"
accountCity = "Raipur"
let accountState; // JavaScript treats this value as undefined

// accountId  = "102" value of const variables can not be chaged

accountEmail = "newemail@gamil.com"
accountPassword = "01234"
accountCity = "Banglore"

/*
Prefer not use var to declar variables
primarily because of block scope and functional scope
*/

console.log("AccountId:"+accountId)
console.table([accountId , accountEmail, accountPassword, accountCity, accountState])