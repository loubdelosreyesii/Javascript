const myArray = ["eat","sleep","code"];

const myObject ={
    name:"Lou II",
    hobbies: ["eat","sleep","code"],
    logName: function(){
        console.log(this.name);
    }
}



// // sessionStorage.setItem("mySessionStore",JSON.stringify(myObject));
// sessionStorage.setItem("mySessionStore",JSON.stringify (myArray));
// // const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);
// //because session and local storage stores only string data.


// sessionStorage.setItem("mySessionStore",JSON.stringify(myObject));

//because session and local storage stores only string data.
//localStorage is a persistent data.

//In JSON, only the properties will be retrieved and saved.
//IN JSON, array can be converted to JSON using the stringify and parse method.

localStorage.setItem("myLocalStore",JSON.stringify (myArray));

//removing specific localdata
// // localStorage.removeItem("myLocalStore");
//remove all the local data of the visited website.
// // localStorage.clear();

//key
const key= localStorage.key(0);

const length = localStorage.length;

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(myLocalData);
console.log(key);
console.log(length);

