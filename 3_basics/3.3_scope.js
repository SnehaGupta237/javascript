// {} ko he scope kehte h ,functions ,if-else main jab ata h toh usse scope kehte h

let a =300
if(true){
    let a =10
    const b=20
    console.log("INNER:",a)  //INNER:10
}
console.log(a)   //300

function one(){
    const username="sneha"
    function two(){ 
        const website="youtube"
        console.log(username)           //sneha
    }
    console.log(website)             //error //ye print nahi hoga kyuki parent function child ke variables ko access nahi kar skate lekin ,child parent function ke variables ko acess kar sakte h
    two()           //executing two
    
}
one()        //executing one

if(true){
    const username="sneha"
    if(username ==="sneha"){
        const website="youtube"
        console.log(username+website)  //sneha youtube
    }
    console.log(website)          //error//parent child ka data nahi le sakta
}
console.log(username)     //error   //ye toh scope se he bahar h iisliye



//+++++++++++++++++++++interesting++++++++++++++++++
function addOne(num){
    return num+1
}

console.log(addOne(5))   //6 //function koa aise bhi lekh sakte h

const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))       //7 //aise bhi //variable main store karke