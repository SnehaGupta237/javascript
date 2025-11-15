//jab tumko pata na ho ke kitne parameters ane wale h..eg shopping card..nahi pata  hota h ke user kitne items add karega cart main ..sabko add karna hoga na

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(100,200,300))  //100


function calculateCartPrice(...num1){        //"..." rest operator h
    return num1
}
console.log(calculateCartPrice(100,200,300))  //[ 100, 200, 300 ]


function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300,500,600,800)) //[ 300, 500, 600, 800 ]  //100 val1 main chala gaya,200 val2 main,baaki bache huye rest operator main display ho rahe h

//********************objects in functions*************
const user={
    userName:"Geeta",
    occupation:"Housewife"
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and occupation is ${anyObject.occupation}`)
}
handleObject(user)        //username is Geeta and occupation is Housewife // ye bata raha h ke user se data lo
handleObject({
    userName:"prachi",
    occupation:"student"     //username is prachi and occupation is student  //ye bata raha ke maine abhi jo data diya h woh use karo
})


//*****************arrays in function********************
const myNewArray=[100,200,400,600]
function returnSecondValue(getArray){
    console.log(`The second value is ${getArray[1]}`)
}
// returnSecondValue(myNewArray)  //The second value is 200  //myNewArray se data le raha h

returnSecondValue([ 1000,5000,7000])   //The second value is 5000

