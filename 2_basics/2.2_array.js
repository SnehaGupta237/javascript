// const language =["hindi","marathi","english","bhojpuri"]
// const tech_language=["c++","python","javasript","java"]

// const lang =language.push(tech_languages)
// console.log(lang)      //['hindi','marathi','english','bhojpuri' [ 'c++', 'python', 'javasript', 'java' ]]

// const newLanguage = language.concat(tech_languages)
// console.log(newLanguage)       //adding both variables

// const allNewLanguage = [...language, ...tech_language]
// console.log(allNewLanguage)          //adds both variables...best methods

const another_arraay = [1,2,3,[4,5,6],7,[8,4,7,[3,2]]]
const its_array = another_arraay.flat(Infinity)  //[1, 2, 3, 4, 5,6, 7, 8, 4, 7,3, 2]   //sabko ek sath banake de deta h
console.log(its_array)

console.log(Array.isArray("sneha")) //false  //ye array main hai ya nahi
console.log(Array.from("sneha"))  // [ 's', 'n', 'e', 'h', 'a' ]  //array bana dete h

console.log(Array.from({name:"sneha"}))  //[] //empty deta h kyuki usko pata nhai chalta h ke key ka array banana h ya value ka ...interesting  topic

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3))  //[ 100, 200, 300 ]



