//*******************objects singleton (constructor)************

/* const user = new Object()             //singleton(constructor) 
   user.name="sneha"      
   console.log(user.name)  */

/* const user={                                    //literals
                name:"Sneha"
                }                    
 console.log(user.name)   */  

//dono same return karte h bus difference ye h ke ek singleton ha ur ek literals

const tinderUser = new Object()

tinderUser.name = "prachi"
tinderUser.id="123abc"
tinderUser.isLoggedIn = false

console.log(typeof tinderUser.id)

//in most case we will use literal object

//**********object within object*************
const instaUser = {
    email:"sneha@insta.com",
    fullName: {
        userFullName:{
            FirstName:"Sneha",
            LastName:"Gupta"

        }

    }
    }
                               /*{
                                 email: 'sneha@insta.com',
                                fullName: { userFullName: { FirstName: 'Sneha', LastName: 'Gupta' } }
                              */
console.log(instaUser.fullName)                             //{ userFullName: { FirstName: 'Sneha', LastName: 'Gupta' } }
console.log(instaUser.fullName.userFullName.FirstName)  //Sneha

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
// console.log(obj1+obj2)
console.log(obj3)


// destructuring of objects
const course={
    courseName:"chai aur code",
    courseTeacher:"hitesh choudhary",
    price:"free"
}
const {price:fee} =course   //fee price ka alternative naam h
console.log(fee)
//{} main kuch lekha h mtlb objects ka destructuring kiya h

/*{
    "name":"sneha"
    "hobby":"music"     //json h ye
    "height":"5.5"
}*/

/*[
    {},        
    {},            //ye bhi json h
    {}
]*/