const chai=function(){
  let unsername="sneha"
    console.log(this.username)        //undefined 
}
chai()


//function keyword ke jagah => lekhna h
const coffe = () =>{
    let username="sneha"
    console.log(this)               //{}
}
coffe()

//**************Arrow function************** () => {}
   /*1*/ const addTwo = (num1,num2) =>{
        return num1+num2            //explicit tareeka kyuki explicitly return lagan pad raha h

    }
    console.log(addTwo(5,3))   //8

    const add2 = (num1,num2) => num1+ num2   //implicit tareeka
    console.log(addTwo(3,3))   //6


    /*2*/const Add2 = (num1,num2) => (num1+ num2)   //implicit tareeka
    console.log(addTwo(3,3))   //6

    //{} main wrap kiya ho toh return lekhna hoga 1),() main wrap kiya ho toh nahi lkehna hoga 2)

    /*object ko parenthesis () main he wrap kiya jata h 
     const addTwo = (num1,num2) => ({username:"sneha"})   */
