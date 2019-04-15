

// first run npm init and install lite server so that you 
// run tsc --init to create a tsconfig.json file, this is useful because now you can just run 
// 'tsc' on the cmd line and all typescript files will get compiled

console.log("It works!");

// string
let myName = 'Ahmed'; // typescript will assign a type of string
// myName = 24; // error

// number
let myAge = 24; // floating point numbers are also valid
// myAge = 'twenty-four'; // error

// boolean
let hasALife = false;
// hasALife = 1; // error

let myNextAge; // since nothing is assigned initially, typescript assigns a type of 'any'
myNextAge = 25;
myNextAge = 'twenty-five';

let myPreviousAge: number; // a type is assigned 
myPreviousAge = 23;
// myPreviousAge = 'twenty-three'; // error

let hasHobbies: boolean = false;
// hasHobbies = 'tru-dat'; //error

// array
let hobbies = ['jiu-jitsu', 'manga']; // an array of strings
// hobbies = [100] // error
hobbies = ['yo']

// if we want an array of any type
let myHobbies: any[] = ['evian', 2]
// myHobbies = 100 // error - this is no longer an array


// tuples
// are arrays with mixed types and a limited number of items
let address: [string, number] = ['Superstreet', 99]
// address = [99, 'Superstreet'] // error - wrong format - it should be a string first then a number
