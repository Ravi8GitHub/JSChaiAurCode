const accountId = 144553
let accountEmail = "ravi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2345 // not possible
accountEmail = "sr@gmail.com"
accountPassword = "121212"
accountCity = "Bangaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/