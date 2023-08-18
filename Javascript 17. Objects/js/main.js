//key value pairs in curly braces
const myObj = {name : "Lou II"}

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat","Sleep","Code"],
    beverage:{
        morning: "Coffee",
        afternoon:"Iced Tea"
    },
    //method name : anonymous function
    action : function()
    {
        // return "Hello World!";
        return `Time for  ${this.beverage.morning}!`;
    }
};

// console.log(myObj);
console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["alive"]);

console.log(anotherObj.beverage.morning);

console.log(anotherObj.action());

const vehicle ={
    wheels:4,
    engine : function(){
        return "Vroooooom!";
    }
};

//creating constructor for an object
//example of inheritance
const truck  = Object.create(vehicle);
//adding new properties
truck.doors =2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors =3;
car.engine = function(){
    return "WOOOOOOoosh!";
}
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());

tesla.engine = function(){
    return "Shhhhhhhh..";
}

console.log(tesla.engine());

const band = {
    vocals:"Rober Plant",
    guitar: "Jimmy Page",
    bass:"John Paul Jones",
    drums:"john Bonham"
};
//delete a property;
delete band.drums;

//checking if a property exists in an object.
console.log(band.hasOwnProperty("guitar"));

//get all keys of the properties
console.log(Object.keys(band));
//get all the values of the object.
console.log(Object.values(band));

for(let job in band){
    //for in loop
    console.log(`On ${job}, it's  ${band[job]}`);
}

// destructuring object
 const {vocals, guitar,bass, drums} = band;

function sings({ vocals })
    {
        return `${vocals} sings!`;
    };

console.log(sings(band));