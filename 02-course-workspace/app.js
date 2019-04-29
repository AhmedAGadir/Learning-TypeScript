// first run npm init and install lite server so that you 
// run tsc --init to create a tsconfig.json file, this is useful because now you can just run 
// 'tsc' on the cmd line and all typescript files will get compiled
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("It works!");
// string
var myName = 'Ahmed'; // typescript will assign a type of string
// myName = 24; // error
// number
var myAge = 24; // floating point numbers are also valid
// myAge = 'twenty-four'; // error
// boolean
var hasALife = false;
// hasALife = 1; // error
var myNextAge; // since nothing is assigned initially, typescript implicitly assigns a type of 'any'
// if you want TS to give you warnings so that you can explicity set all types, then set compilerOptions.noImplicitAny = true
myNextAge = 25;
myNextAge = 'twenty-five';
var myPreviousAge; // a type is assigned 
myPreviousAge = 23;
// myPreviousAge = 'twenty-three'; // error
var hasHobbies = false;
// hasHobbies = 'tru-dat'; //error
// array
var hobbies = ['jiu-jitsu', 'manga']; // an array of strings
// hobbies = [100] // error
hobbies = ['yo'];
// if we want an array of any type
var myHobbies = ['evian', 2];
// myHobbies = 100 // error - this is no longer an array
// tuples
// are arrays with mixed types and a limited number of items
var address = ['Superstreet', 99];
// address = [99, 'Superstreet'] // error - wrong format - it should be a string first then a number
// enum
// creates a new type called Color
// behind the scenes these values represents some numbers
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Orange"] = 3] = "Orange"; // 3
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // 1
// any 
var car = 'BMW';
car = { brand: 'BMW', series: 3 };
// functions
function getMyName() {
    return myName;
}
console.log(getMyName());
// void
function sayHello() {
    console.log('Yo');
}
sayHello();
// argument types
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
// function types
var myMultiply; // the names of the arguments here ('a' and 'b') dont matter
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects 
var userData = {
    name: 'Max',
    age: 27
};
// typescript will infer this is an object with a name field of type string and an age field of type number
var userData2 = {
    name: 'Max',
    age: 27
};
// putting it all together
var complex = {
    data: [100, 3.99, 10],
    output: function (foo) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (foo) {
        return this.data;
    }
};
// union type
var myRealRealAge = 27; // may be either a number or a string
myRealRealAge = '27';
// check types 
var finalValue = 40;
if (typeof finalValue === 'number') {
    console.log('finalValue is a number');
}
// never
function neverReturns() {
    throw new Error('an error!');
}
// Nullable types
// by default any type can be assigned a value of null, 
// to make this more strict, go into tsconfig.json and add compilerOptions.strictNullChecks = true;
// now null values have to be specified; except in the case of undefined/any values
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
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
var multiplyNumbers = function (a, b) { return a * b; };
var greetFriend = function (friend) { return console.log('hello ' + friend); };
// default parameters
var countdown = function (start) {
    if (start === void 0) { start = 5; }
    while (start > 0) {
        start--;
        console.log(start);
    }
    console.log('done', start);
};
// rest 
function makeArr() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArr(1, 2, 6));
// tuples with rest operator
function printInfo(name, age) {
    console.log('my name is ' + name + ', and i am ' + age + ' years old');
}
function printInfo2() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('my name is ' + info[0] + ', and i am ' + info[1] + ' years old');
}
// destructing 
var _a = ['cooking', 'sport'], hobby1 = _a[0], hobby2 = _a[1];
var _b = { userName: 'AHmed', userAge: 25 }, userName = _b.userName, userAge = _b.userAge;
var double = function (value) { return value * 2; };
console.log(double(10));
var greet = function (name) {
    if (name === void 0) { name = 'Max'; }
    return console.log("Hello, " + name);
};
greet();
greet("Anna");
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
var _c = [3.89, 2.99, 1.38], result1 = _c[0], result2 = _c[1], result3 = _c[2];
console.log(result1, result2, result3);
var _d = { firstName: "Will", experience: 12 }, firstName = _d.firstName, experience = _d.experience;
console.log(firstName, experience);
// classes
var Person = /** @class */ (function () {
    // the second parameter is a shortcut for everything happening in the first paramter: (defining a property in the class, getting it passed as a parameter in the constructor, and assigning that value to that property)
    function Person(name, username, age, isVegan) {
        this.username = username;
        this.name = name;
        this.age = age;
        this.isVegan = isVegan;
    }
    // methods can also be private/protected
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.isAVeggieMan = function () {
        return this.isVegan;
    };
    return Person;
}());
var ahmed = new Person('ahmed', 'ahmedg94', 25, false);
console.log(ahmed);
console.log(ahmed.isAVeggieMan());
// Inheritance 
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(userName, age, isVegan, makesCourses) {
        var _this = 
        // super calls the constructor in the parent class
        _super.call(this, 'Max', userName, age, isVegan) || this;
        _this.makesCourses = makesCourses;
        return _this;
    }
    return Max;
}(Person));
var max = new Max('maxcash', 27, false, true);
console.log(max);
// Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            this._species = value;
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
// static properties
// allows you to access a classes properties/methods without having to instantiate the class
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
// abstract classes
// these are never instantiated, they need to be inherited from
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var myProject = new ITProject();
myProject.changeName('CoffeeApp');
