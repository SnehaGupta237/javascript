const myArray = [0,1,5,7,4,8]     //array can also be of different type const myArray = [0,1,2,3,4,5,true,"Sneha"]

//JS main array can be resizeable,mix of datatypes
//array index starts from 0
//array main jo bhi change karungi,original array main bhi change hoga
// accessing array  
console.log(myArray[3])     //7

const fruits =["apple","mango","banana","cherry"]
console.log(fruits[2])          //banana

//array methods
const myArray2 =[0,1,2,3,4,5,6]
myArray2.push(7)        //[0,1,2,3,4,5,6,7]
myArray2.pop()             //last wala niklega
myArray2.unshift(9)    //9 ko starting main add karega
myArray2.shift()       //9 ko remov kar diya

console.log(myArray2) 
console.log(myArray2.includes(3))            //true
console.log(myArray2.indexOf(4))     //4

const newArray = myArray2.join()    //string main convert krta h
console.log(myArray2)
console.log(typeof newArray)        //string

//slice,splice
const A = [10,20,30,40,50,60]
console.log("A",A)         //A [ 10, 20, 30, 40, 50, 60 ]

const newA = A.slice(1,4)
console.log("Slice A",newA)        //Slice A [ 20, 30, 40 ]   //donnot include last demand
console.log(A)                 //[ 10, 20, 30, 40, 50, 60 ]       //slice karne ke baad original array waise he rehta h

const newestA = A.splice(1,4)          //includes last demand
console.log("Splice A",newestA)    //Splice A [ 20, 30, 40, 50 ]
console.log(A)             //[ 10, 60 ]   //splice karne se original array se splice ka part nikal jata h aur bacha hua part milta h