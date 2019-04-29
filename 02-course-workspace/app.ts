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

let myNextAge; // since nothing is assigned initially, typescript implicitly assigns a type of 'any'
// if you want TS to give you warnings so that you can explicity set all types, then set compilerOptions.noImplicitAny = true
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

// enum
// creates a new type called Color
// behind the scenes these values represents some numbers
enum Color {
    Gray, // 0
    Green, // 1
    Blue, // 2
    Red = 100, // 100 // the next increment will be 101 unless we set the next number aswell
    Orange = 3 // 3
}
let myColor: Color = Color.Green;
console.log(myColor) // 1

// any 
let car: any = 'BMW';
car = { brand: 'BMW', series: 3 }

// functions
function getMyName(): string {
    return myName;
}
console.log(getMyName())

// void
function sayHello(): void {
    console.log('Yo');
}
sayHello();

// argument types
function multiply(a: number, b: number): number {
    return a * b;
}
console.log(multiply(2, 5));

// function types
let myMultiply: (a: number, b: number) => number; // the names of the arguments here ('a' and 'b') dont matter
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects 
let userData = {
    name: 'Max',
    age: 27
}
// typescript will infer this is an object with a name field of type string and an age field of type number
let userData2: { name: string, age: number } = {
    name: 'Max',
    age: 27
}

// putting it all together
let complex: { data: number[], output: (foo: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (foo: boolean): number[] {
        return this.data;
    }
}

//  type alias
type Complex = { data: number[], output: (foo: boolean) => number[] }; // reusable

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (foo: boolean): number[] {
        return this.data;
    }
}

// union type
let myRealRealAge: number | string = 27; // may be either a number or a string
myRealRealAge = '27';

// check types 
let finalValue = 40;
if (typeof finalValue === 'number') {
    console.log('finalValue is a number')
}

// never
function neverReturns(): never {
    throw new Error('an error!')
}

// Nullable types
// by default any type can be assigned a value of null, 
// to make this more strict, go into tsconfig.json and add compilerOptions.strictNullChecks = true;
// now null values have to be specified; except in the case of undefined/any values
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

// exercise 1

type bankAccount = { money: number, deposit: (value: number) => void }

let bankAccount: bankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: bankAccount, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);


// tsConfig options NOTE: 
// if you'd like to debug the typescript files in the chrome devtools instead of the compiled JS files, then set compilerOptions.sourceMap = true, then you can set breakpoints in devtools
// for more options in tsconfig check out http://www.typescriptlang.org/docs/handbook/tsconfig-json.html

// setting compilerOptions.noUnusedParameters = true will allow give errors when functions have parameters specified which are never used 



// es6 
const multiplyNumbers = (a: number, b: number): number => a * b;
const greetFriend = (friend: string): void => console.log('hello ' + friend);

// default parameters
const countdown = (start: number = 5): void => {
    while (start > 0) {
        start--;
        console.log(start);
    }
    console.log('done', start)
}

// rest 
function makeArr(...args: number[]) {
    return args
}
console.log(makeArr(1, 2, 6))


// tuples with rest operator

function printInfo(name: string, age: number) {
    console.log('my name is ' + name + ', and i am ' + age + ' years old')
}

function printInfo2(...info: [string, number]) {
    console.log('my name is ' + info[0] + ', and i am ' + info[1] + ' years old')
}

// destructing 
const [hobby1, hobby2]: [string, string] = ['cooking', 'sport'];

const { userName, userAge }: { userName: string, userAge: number } = { userName: 'AHmed', userAge: 25 }

let double = (value: number): number => value * 2;
console.log(double(10));

let greet = (name: string = 'Max'): void => console.log("Hello, " + name);
greet();
greet("Anna");

let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

const [result1, result2, result3]: number[] = [3.89, 2.99, 1.38];
console.log(result1, result2, result3);

const { firstName, experience } = { firstName: "Will", experience: 12 };
console.log(firstName, experience);


// classes
class Person {
    // default is public, accessible from anywhere
    name: string;
    // only accessible from within this object
    private age: number;
    // accessible only from within this object, and objects that inherit from this class
    protected isVegan: boolean;

    // the second parameter is a shortcut for everything happening in the first paramter: (defining a property in the class, getting it passed as a parameter in the constructor, and assigning that value to that property)
    constructor(name: string, public username: string, age: number, isVegan: boolean) {
        this.name = name;
        this.age = age;
        this.isVegan = isVegan;
    }

    // methods can also be private/protected
    getAge() {
        return this.age;
    }

    isAVeggieMan() {
        return this.isVegan;
    }

}

const ahmed = new Person('ahmed', 'ahmedg94', 25, false);
console.log(ahmed);
console.log(ahmed.isAVeggieMan());

// Inheritance 
class Max extends Person {
    makesCourses: boolean;
    constructor(userName: string, age: number, isVegan: boolean, makesCourses: boolean) {
        // super calls the constructor in the parent class
        super('Max', userName, age, isVegan);
        this.makesCourses = makesCourses;
    }
    // cant reach parents private methods from here;
    // can reach parents protected methods from here 
}

const max = new Max('maxcash', 27, false, true);
console.log(max);

// Getters and Setters
class Plant {
    private _species: string;

    set species(value: string) {
        this._species = value;
    }

    get species() {
        return this._species;
    }
}

// static properties
// allows you to access a classes properties/methods without having to instantiate the class
class Helpers {
    static PI: number = 3.14;
}

console.log(Helpers.PI)

// abstract classes
// these are never instantiated, they need to be inherited from
abstract class Project {
    projectName: string = 'Default';
    budget: number = 1000;

    // for abstract methods we don't provide a function body, we just define what the function should look like
    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let myProject = new ITProject();
myProject.changeName('CoffeeApp');