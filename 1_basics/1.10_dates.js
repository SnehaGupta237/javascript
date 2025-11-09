let myDate = new Date()        //date ko object banaya h //Date ek object h aur myDate uska instance h  //abhi ka time,date dega

console.log(myDate)        //2025-11-07T07:04:06.298Z
console.log(myDate.toString())  //Fri Nov 07 2025 12:35:49 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())  //  Fri Nov 07 2025 // sirf date prnt karega
console.log(myDate.toLocaleString())  //7/11/2025, 12:40:36 pm  //date,time

console.log(typeof myDate)   //object

//agar koi specific date he declare karni h
let myCreatedDate = new Date(2005,6,23,19,22)   
console.log(myCreatedDate.toDateString()) //Sat Jul 23 2005
console.log(myCreatedDate.toLocaleString())  //23/7/2005, 7:22:00 pm

let newDate = new Date()
console.log(newDate.getMonth())   //10

//month 0 se start hota h JS main

console.log(newDate.toLocaleString('default',{
    weekday :"short",        //fri  //ctrl+space ..opttion dekhenge
}))