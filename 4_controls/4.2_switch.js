//basic syntax of switch

/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/
 
const month = 3
switch (month){                   //key woh value oti h jisse hame check karna h
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;                                  //march
    case 4:
        console.log("april")
        break; 
    case "may":
        console.log("may")           //string aya toh "" main lekhna h
        break;
    default:
        console.log("kuch nhai hua toh ye print hoga")
        break;
}

/*  jaha pe key match hota h ..agar break nahi lagaya toh uske baad saare code execute ho jata h except default */