
// up start of JS to 2015
var x=1;
var x=2; //does not throw error in redeclaring existing variable
//not recommended to use this keyword, instead use the let keyword.
// let y=1;
// let y=2; //throw error in redeclaring existing variable

const z=1;
// z=2;//throw error in reassigning variable.
console.log(x);

//local scope

//local scope
function myFunc(){
    const z = 5;
    console.log(z);
    {
        let y=4;
    
        console.log(y);

        {
            let y=10;

            console.log(y);
        }
    }
    
}

myFunc();