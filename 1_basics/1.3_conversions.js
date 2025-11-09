// let score = 30;
let score ="30abc"
// let score ="sneha"
// let score =true
// let score =null
// let score =undefined

console.log(typeof score);        //string

let valueInNumber = Number(score)           //converting string into    number
console.log(typeof valueInNumber);     //number
console.log (valueInNumber)            //Nan    number not defined

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)  //converting number to bool
console.log(booleanIsLoggedIn)               //true

//"" =>false
//"sneha" =>true