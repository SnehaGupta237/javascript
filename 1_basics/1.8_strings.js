const name="Sneha"
const sirName=" Gupta"
console.log(name+sirName)           //old method

console.log(`Hello my name is ${name} and my sir name is ${sirName}`) //new method

// JS main space count hota hnode

let gameName= new String('volarant')              //string ko as an object
console.log(gameName[3])            //a
console.log(gameName.__proto__)         //{}
console.log(gameName.length) 

// accessing methods/prototypes
console.log(gameName.toUpperCase())              //uppercase main change ho gaya h lekin original string abhi bhi waise he rahege due to stack memory
console.log(gameName.charAt(6))     //n
console.log(gameName.indexOf('t'))  //7

let newGameName= gameName.substring(0,4)   //vola
console.log(newGameName)
const anothergame = gameName.slice(-8,3)   
console.log(anothergame)                   //vol

const babe="     prachi      "
console.log(babe)                    //     prachi
console.log(babe.trim())            //removes the space //prachi

let xyz="Sneha bechan gupta"          //replacing value
console.log(xyz.replace('bechan', '-'))             //Sneha - gupta
console.log(xyz.includes('bechan'))         //true

console.log(xyz.split(' '));         //jab space dekhe waha seperate karo

//strings ka MDN refer karo