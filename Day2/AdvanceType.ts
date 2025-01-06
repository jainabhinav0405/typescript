
//Union Type
//Union types are used when a value can be more than a single type.

let unionType: string | number;
unionType = "hello";
unionType = 10;

function printStatusCode(code: string | number) {

    // console.log(`My status code is ${code.toLowerCase()}.`)// can't work due to toLowercase() doesn't exist in the number
    if(typeof code ==="string"){
        console.log(`My status code is ${code.toLowerCase()}.`)
    }
    console.log(`My status code is ${code}.`)

  }
  printStatusCode(404);
  printStatusCode('404');


const popStack = (stack: string[]) => {
  if (stack.length) {
    return stack[stack.length-1]; // return type is any
  } else {
    return null;      // return type is null
  }
};
let toys: string[] = ['Doll', 'Ball', 'Marbles'];
let emptyBin: string[] = [];
let item: string | null = popStack(toys); // item has union type
console.log(item);  // Prints "Marbles"
item = popStack(emptyBin);
console.log(item);  // Prints null


function checkMethods(ele: string|number[]){
    return ele.length;//if functions present in both then work properly.
}



//////////// type vs interface //////////////
/*
Type:
    1.  if there is 2 type of same name, this will thrown an error 
    2. for merging we use union and intersection    
    3. we can merge types and interface.
    4. Can directly represent the Primitive

interface:
    1. if there is 2 interface of same name, it will ind1q  directly auto merge 
    2. this only extends property and don't have choices such as union & intersection
    3. we can't merge types and interface.
    4.  Cannot directly represent primitives or tuples
*/

interface Person{
    name:string,
    age:number
}
interface Person{
    name1:string,
    age2:number
    hello:any
}

const combine1:Person = {name:"Abhinav",age:12,name1:"jain",age2:21,hello:4};


// Union in type
type Person1={
    name:string,
    age:number
}
type Person2={
    name1:string,
    age2:number
}

type Main=Person2 & Person

// const combine:Main = {};

type ArrayType=string[]
interface ArrayTypeIn{
    [index: number]: string
}



type FunctionType=(data:number)=>void
interface FunctionTypeIn{
    (data:number):void
}



/*
//Typeof

////////////////////////////////////////////////////////////////
function getUser() {
  return { name: "Abhinav", age: 30 };
}
console.log(typeof getUser); //function

////////////////////////////////////////////////////////////////

console.log(typeof null); // Output: "object" (This is a known quirk in JS)
console.log(typeof []); // Output: "object" (Arrays are also considered objects)

////////////////////////////////////////////////////////////////
const user = {
  name: "Abhinav",
  age: 30,
};

type UserKeys = keyof typeof user; // UserKeys is 'name' | 'age'
let key: UserKeys = "age"; // This works
// key = "email"; // Error: "email" is not assignable to 'name' | 'age'

////////////////////////////////////////////////////////////////
function getProfile() {
  return { name: "Abhinav", age: 30 };
}

type Profile = ReturnType<typeof getProfile>; // Profile is { name: string; age: number }

// console.log()
const userProfile: Profile = { name: "Abhinav", age: 20 };

////////////////////////////////////////////////////////////////
class Car {
    make: string;
    constructor(make: string) {
        this.make = make;
    }
}
        
const myCar = new Car("Toyota");
        
console.log(typeof myCar); //object
        
*/

/*
//KeyOf
////////////////////////////////////////////////////////////////

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Abhinav", age: 30 };

let userName = getProperty(user, "name"); // userName is of type string
//   let userAge = getProperty(user, "age");   // userAge is of type number

////////////////////////////////////////////////////////////////

interface StringDictionary {
  [key: string]: string;
}

type DictionaryKeys = keyof StringDictionary; // string

let key: DictionaryKeys = "anyKey"; // Works, since it matches the index signature type

////////////////////////////////////////////////////////////////

type ArrayKeys = keyof string[]; // 'number' | 'length' | 'push' | other array methods

let arrayKey: ArrayKeys;

arrayKey = "length"; // Works because arrays have a 'length' property

////////////////////////////////////////////////////////////////

class Car {
  make: string = "Toyota";
  model: string = "Corolla";
  year: number = 2020;

  getMake() {
    return this.make;
  }
}

type CarKeys = keyof Car; // "make" | "model" | "year" | "getMake"


////////////////////////////////////////////////////////////////


*/


/*

//Tuples

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

let ourTuple: [number, boolean, string];

//we can push any value after initialize the main value in the tuples.
var employee: [number, string] = [1, "Steve"];
employee.push("Abhinav", "Bill"); 
console.log(employee); 

//we can pop the values from the tuples 
let empTuple: [string, number, string, number] = ["Mohit Singh", 25, "GeeksforGeeks", 10001];
console.log("Items: " + empTuple);
empTuple.pop();
empTuple.pop();
empTuple.pop();
empTuple.pop();
console.log("Length of Tuple Items after pop: " + empTuple.length);
console.log("Items: " + empTuple);

*/


type record = Record<string,string>;

