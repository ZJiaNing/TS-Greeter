// 1 - optional & any attributes
interface Person {
    firstName: string;
    lastName: string;
    middleName?: string;
    // [propName: string]: any;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jianing", lastName: 'Zhu'};

document.body.innerHTML = greeter(user);

// limit the [shape] of an object
let person: Person = {
    firstName: 'Jianing',
    lastName: 'Zhu',
    // gender: 'female'
}

// 2 - readonly
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 0, y: 0};
// p1.x = 1;

// 3 - readonly array
let arr: number[] = [1, 2, 3, 4];
let arrRO: ReadonlyArray<number> = arr;
// arrRO[0] = 11;

/**
 * For Shaping some behavior of Class
 */
// interface Animal{
//     getSound(sound: string): void;
// }

// class Dog  implements Animal{
//     getSound(sound: string) {
//         console.log(' ' + sound);
//     }
// }

// let myDog = new Dog();
// myDog.getSound('meowed');