if(true){ }                         //agar condition tru h toh scope ke adar paka jana h 

if(false){}                       //false h toh nahi janyega scope ke andar
                                
//<, >, <=, >=, == equal to h ya nahi, !==, === equalto h aur datatype bhi same h

if(2 == 2){
    console.log("executed")      //executed
}

const temperature = 40
if(temperature<50){
    console.log("temperature is less than 50")    
}
else{
    console.log("temperature is greater than 50")
}                                                  //temperature is less than 50

const score = 200
if(score>100){
    let power="fly"
    console.log(`user power:${power}`)       //user power:fly
}

 console.log(`user power:${power}`)   //error //scope ke bahar variables ko access nahi kar sakte

 //but agar let ke jagah var hota toh kar pate


//  *********************nesting***************
const balance =1000
if(balance<500){
    console.log("less than 500")
}else if(balance<750){
    console.log("less than 750")
}else if(balance<900){
    console.log("less than 900")
}else{
    console.log("less than 1200")           //less than 1200
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){        //allow to shop   //dono condition true hota toh he print hoga  
    console.log("allow to shop")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")              //user logged in //dono main se koi ek true hua toh ye print hoga
}