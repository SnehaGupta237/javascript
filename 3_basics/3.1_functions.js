function sayMyName(){
    console.log("S");
    console.log("N");
    console.log("E");
    console.log("H");
    console.log("A");
}
sayMyName()                            //sayMyName funstion ka reference h aur () function ka execution


function addTwoNumber(number1,number2){     //number1,number2 are parameters
    console.log(number1+number2)
}
addTwoNumber(5,7)                          //12 //5,7 are arguments


function subTwoNumber(num1,num2){
    console.log(num1-num2)
}
const result = subTwoNumber(8,2)         //8    //function ko variable ke ander store kar diya
console.log("Result",result)            //Result undefined


function divideTwoNumber(N1,N2){
    // const solution = N1/N2
    // return solution   
     return N1/N2                    //return ke baad kuch bhi print nahi hota h
}
const solution= divideTwoNumber(10,2)
console.log("Result",solution)                //Result 5


function loginUser(username){
    return`${username} just logged in`

}
console.log(loginUser("Sneha"))         //Sneha just logged in


function loginUserMessage(userName="sam"){     //default value de h maine
    if(userName === undefined){
        console.log("please enter a username")   //please enter a username
    }
    return`${userName} just logged in`      //sam just logged in
}
console.log(loginUserMessage())
//value pass kiya toh value just logged in otherwise,underfined pe sam just logged in