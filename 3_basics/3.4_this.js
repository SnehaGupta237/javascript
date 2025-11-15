//this -->current context...abhi jo abhi currently value h...ek scope main jitne bhi variable h unko access karne ke liye "this." lagana padhta h



const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to my page`)
        console.log(this)  /* hitesh,welcome to my page
                                  {
                                    username: 'hitesh',
                                    price: 999,
                                    welcomeMessage: [Function: welcomeMessage]
                                  }
                                sneha,welcome to my page
                                 {
                                   username: 'sneha',
                                   price: 999,
                                   welcomeMessage: [Function: welcomeMessage]
                                 }*/

    }
}
user.welcomeMessage()   //hitesh,welcome to my page
user.username="sneha"
user.welcomeMessage()   //sneha,welcome to my page  //kyuki pehle value histesh the lekin ab current value sneha h 
console.log(this)            //{}



function chai(){
    let unsername="sneha"
    console.log(this.username)        //undefined //function ke ander this kaam nahi karta
}
chai()
//imp ...agar function ke andar console kar lete ho toh bahar execute karna padhta h ..chai ()

const chai=function(){
  let unsername="sneha"
    console.log(this.username)        //undefined 
}