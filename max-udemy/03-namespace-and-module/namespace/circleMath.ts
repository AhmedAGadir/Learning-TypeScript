namespace MyMath {
    // you can also nest namespaces 
    export namespace Circle {
        const PI = 3.14;

        export function calculateCircumference(diameter: number): number {
            return diameter * PI;
        }

    }
}
