"use strict"

const makeError = ()=>{
    try{
        // throw new customError("this is a custom error!");

        throw new Error("This is a generic error!");
        const name = "Dave";
        name="Lou";
    }   
    
    catch(err){
        
        console.warn(err);
        console.table(err);

        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    }
    finally{
        console.log("...finally");
    }
}

makeError();

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name} : ${this.message}`;
}