//function declaration syntax
function sum(num1,num2){
    if(num2===undefined){
        return num1+num1;
    }
    return num1+num2;
}

// console.log(sum(2,6));
console.log(sum(2,3));

//anonymous function

const getUserNameFromEmail = function(email){
    return email.slice (0,email.indexOf("@"));
}

// Arrow function
const getUserNameFromEmail2 = (email) =>{
    return email.slice (0,email.indexOf("@"));
}

console.log(getUserNameFromEmail("lou.delosreyes@metrobank.com.ph"));

console.log("Arrow Function: " + getUserNameFromEmail2("lou.delosreyes@metrobank.com.ph"));

const toProperCase = (nameKo)=>{
    return nameKo.charAt(0).toUpperCase() + nameKo.slice(1).toLowerCase();
}

console.log(toProperCase("september"));