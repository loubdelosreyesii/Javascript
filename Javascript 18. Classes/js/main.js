class Pizza{

    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize){
        this.#size  = pizzaSize;
    }
    //use method instead of setter and getter

    getCrust(){
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    hereYouGo()
    {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
    // get pizzaCrust(){
    //     return this.crust;
    // }

    // set pizzaCrust(pizzaCrust){
    //     this.crust= pizzaCrust;
    // }
    
    // bake()
    // {
    //     console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    // }
}

const myPizza  = new  Pizza("Jumbo");
myPizza.hereYouGo();

// const myPizza  = new  Pizza("Hawaiian","Jumbo");

// myPizza.bake();

// console.log(myPizza.type);
// console.log(myPizza.size);

// //not recommended to update a property of a class
// myPizza.type = "Supreme";

// myPizza.setCrust("Very Thin");

// console.log(myPizza.getCrust());

// to create a child class
// class SpecialtyPizza extends Pizza{
//     constructor(pizzaSize){
//         super(pizzaSize); //calls the parent class constructor
//         this.type = "The Works";
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//     }
// }
// const   mySpecialty = new SpecialtyPizza("Medium Rare");

// mySpecialty.slice();

