const userEmail = "sneha@gmail.com"

if(userEmail){
    console.log("got a email")
}else{
    console.log("dont have email")
}

//falsy value
/*false, 0, -0, BigInt 0n, "", null, undefined, NaN */

//truthy value
//   falsy ke alawa  baaki sab truthy h, "0", "false", " " , {}, [], function() {}  

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")                   //object is empty
}

if(userEmail.length === 0){
    console.log("array is empty")
}


//********************Nullish Coalescing Opeartor(??): null undefined */

let val1
// val1 = 5 ?? 10           //5  //1st value assign hoti h
val1 = null ?? 10              //10   //null aur undefined ko chodke dusre value print karega
val1 =undefined ?? 20           //20
console.log(val1)



//************Ternairy opertor **************/
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")