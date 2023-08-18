//empty array
const myArray=[];
//add elements to an array
myArray[0]="Lou";
myArray[1]=1090;
myArray[2]=false;

//refer to an array
console.log(myArray);

///lnegth of an array
console.log(myArray.length);

//last item in array
console.log(myArray[myArray.length-1]);

// access item
console.log(myArray[1]);

//Add item to array
myArray.push("school");
console.log(myArray);

//Remove the last item from an array and hold the item.
const lastItem = myArray.pop();
console.log(myArray);

myArray.push(lastItem);
console.log(myArray);

//add item in the front of an array.
myArray.unshift(42);
console.log(myArray)

const firstItem =myArray.shift();
console.log(myArray);
console.log(firstItem);

// do not use this 
// delete myArray[1];
// console.log(myArray);
// console.log(myArray[1]);

// myArray.splice(1,2);
// console.log(myArray);

// replacing values
myArray.splice(1,0,44);
console.log(myArray);

const  myArrayAlpha = ["A","B","C","D"];

const newArray = myArrayAlpha.slice(0,4);

myArrayAlpha.reverse();

console.log(myArrayAlpha);

const newString = myArray.join();

console.log(newString);

const mergeArray = [...myArray,...newArray];

const mergeArrayEach = [myArray,newArray];

console.log(mergeArray)
console.log(mergeArrayEach)

