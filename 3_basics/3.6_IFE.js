// Immediately Invoked Function Expression (IIFE)
//2 reason for ife  ..global scope se pollution se bachne ke liye   ek alag se scope bana lenge , aur function turant he execute ho jaye

(function chai(){               //ye named IFE h kyuki iska naam chai h
    console.log("DB connected")
})();         //DB connected  //function ko () main wrap karna hoga,return ke liye(),aur ; dekhan h stop here

( () => {
    console.log("DB2 connected ")
})();                   //DB2 connected 

( (name) => {
    console.log(`DB connected to ${name}`)
})("sneha");               //DB connected to sneha


