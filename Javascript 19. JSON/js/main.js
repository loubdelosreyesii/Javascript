const   myObject = {
    name: "Dave",
    hobbies:["eat","sleep","code"],
    hello: function(){
        console.log("Hello!");
    }
}

const sendJSON = JSON.stringify(myObject);

console.log(sendJSON);

console.log(typeof sendJSON);

const receivedJSON = JSON.parse(sendJSON);

console.log(receivedJSON);
console.log(typeof receivedJSON);