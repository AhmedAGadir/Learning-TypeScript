var MyMath;
(function (MyMath) {
    // you can also nest namespaces 
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, height) {
        return width * height;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
// namespace MyMath {
//     const PI = 3.14;
//     export function calculateCircumference(diameter: number): number {
//         return diameter * PI;
//     }
//     export function calculateArea(radius: number): number {
//         return PI * radius * radius;
//     }
//     export function calculateRectange(width: number, height: number): number {
//         return width * height;
//     }
// }
// console.log(MyMath.calculateArea(4))
// ====================================================================================
// ====================================================================================
// sometimes we may want to split up the namespace into multiple files e.g. split MyMath into circleMath.js and rectangleMath.js 
// the problem now is that we need to include these separate file imports in our project, there are 3 ways to do this:
// 1) manually add script tags for each compiled file in our index.html file
// 2) bundle the ts files into a new file, and add the bundled file to the index.html
//      to do this run "tsc --outFile <<output file name>> <<list of files to include in the bundle>>" e.g. "tsc --outFile bundle.js circleMath.ts rectangleMath.ts app.ts" 
//      (the order matters - its the order that theyll be added into the bundle file)
// 3) use the typescript import syntax, and just compile using "tsc app.ts --outFile app.js" then include app.js in index.html
// typescript import syntax
/// <reference path="./namespace/circleMath.ts" />
/// <reference path="./namespace/rectangleMath.ts" />
// not es6
// import CircleMath = MyMath.Circle;
var PI = 3;
console.log(MyMath.calculateRectangle(4, 2));
// for nested namespaces
console.log(MyMath.Circle.calculateCircumference(3));
// or you can use the typescript import syntax
// console.log(CircleMath.calculateCircumference(3));
console.log(PI);
