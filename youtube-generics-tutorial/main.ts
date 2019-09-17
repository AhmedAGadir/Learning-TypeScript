type numArr = Array<string>
// same thing as: 
// type numArr = string[];

// how can this help us

// l2 does work
// const last = (arr: Array<number>) => {
//     return arr[arr.length - 1];
// }

// losing some power with any
// const last = (arr: Array<any>) => {
//     return arr[arr.length - 1];
// }

const last = <T>(arr: Array<T>): T => {
    return arr[arr.length - 1];
}

// typescript can now infer what gets returned (hover over l and l2)
const l = last([1, 2, 3]);

const l2 = last(['a', 'b', 'c']);


// next example - using multiple generics and specifying defaults

// const makeArr = (x: number) => [x];

// with generics 
// const makeArr = <T>(x: T): T[] => [x];

// with multiple generics
// const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
//     return [x, y];
// }

// can specify defaults 
const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
    return [x, y];
}

const v = makeArr(5, 6);
// you can override what the types are going to be
const v2 = makeArr<string, number>('a', 10);
// if you specify defaults, then you dont have to specify all types when overriding 
const v3 = makeArr<string | null>(null, 20);


// next example
// extending with generics 

// typescript will bark because v4 has more properties than our function expects - this is a good time for generics
// const makeFullName = (obj:{ firstName: string, lastName: string }) => {
//     return {
//         ...obj,
//         fullName: obj.firstName + ' ' + obj.lastName
//     }
// }

const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

const v4 = makeFullName({ firstName: 'Bob', lastName: 'junior', age: 15 });
// v4. // we can see all the methods on it now
