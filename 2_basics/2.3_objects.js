//objects ko declare karne ke 2 tareeke hote h 1.Literal,2.constructor

//constructor se object banate h toh singleton banta h,literal se object banta h toh singleton nhi banta

//object literals                  //const user1={}...yehe h object literals

const mySymbol =Symbol("key1")
const user1={                     //curly braces ko he object kehte h
    name:"sneha",
    "fullName":"sneha gupta",
    [mySymbol]:"myKey1",
    age:20,
    class:"sycs",
    isLoggedIn:false,
    email:"sneha@google.com",
    lastLoggedIn:["monday","saturday"]

}

console.log(user1.name)    //sneha  //accessing objects //not a good method

//object main app key bhi define(datatype) kar sakte ho aur value bhi define kar skate ho
//bydefault object  har key ko string manta h ..value aap kuch bhi de skte h string,boolean,array,number etc

console.log( user1["age"])    // 20 //kyuki object bydefault saare key ko string he manta h isisliye " " lagega keyname pe  //good method
console.log( typeof user1.age)  //number

console.log(user1.fullName)    //sneha gupta
console.log  (user1[mySymbol])  //myKey1
console.log(user1["email"])  //sneha@google.com


user1.email = "sneah@microsoft.com"   //changing the value
Object.freeze(user1)                  //koi changes  nahi apply nahi hoga iske baad
user1.email = "sneah@amazon.com"    //ab value chnage nahi ho payega kyuki freeze kiya h upar
console.log(user1)                     /*  {name: 'sneha',
                                           fullName: 'sneha gupta',
                                           age: 20,
                                           class: 'sycs',
                                           isLoggedIn: false,
                                           email: 'sneah@microsoft.com',
                                           lastLoggedIn: [ 'monday', 'saturday' ],
                                           Symbol(key1): 'myKey1'
                                            }*/
                                    

  //*******************function************************

  const user2={
    name:"pachi",
    age:100,
    sirName:"mishra"
  }

  user2.greeting=function(){             //function
    console.log("hello user2")
    console.log(`hello user2 ${this.name}`)
  }

  console.log(user2.greeting)          //[Function (anonymous)]
  console.log(user2.greeting())        /*hello user2
                                        hello user2 pachi*/

//zyada tar object ke value ko . se he access karte h par kuch cases main [] karna padhta h