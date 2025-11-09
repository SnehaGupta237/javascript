// *******************Numbers*********************

const score =100
console.log(score)               //100

const balance = new Number(400)      //Number:400   //specify ar diya ke ye number he h
console.log(balance)

//prototype dekhne ke liye console pe copy paste karke dekho
console.log(balance.toString().length)        //400 //coverts into string aur string ka length batao

console.log(balance.toFixed(2))   //decimal ke baad 2 digit tak number dekhega

let cgpa = 86.786
console.log(cgpa.toPrecision(4))   //86.79 //4th position ke baad roundoff karega

let hundreds = 1000000
console.log(hundreds.toLocaleString())   //10,00,000 //zyada readable banata h


//************************maths**********************
console.log(Math)
console.log(Math.PI)           //3.141592
console.log(Math.abs(-5))      //5  //absolute value deta h   //neg convert into positive
console.log(Math.round(4.35))    //4  //roundoff
console.log(Math.ceil(4.3))           // 5 //upper value dega
console.log(Math.floor(4.3))           //4  //lower value 

console.log(Math.random())    //  0.41324526626262772 //random number between 0-1
console.log(Math.random()*10)     //4.13224535637343772 //sifts 1 decimal to right
console.log((Math.random()*10) + 1)    //agar 0 aya toh *10 karne se 0 he ayega isisliye +1



const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max - min)+1 ))      //imp in making ludo dices

