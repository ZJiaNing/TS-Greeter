// 0
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.greeting = function () {
        return "I am a " + this.name;
    };
    return Animal;
}());
var animal = new Animal('Cat');
console.log(animal.greeting());
// extends
// class Cat extends Animal {
//     constructor(name: string) {
//         super(name);
//         console.log(this.name);
//     }
//     greeting() {
//         return 'Meow, ' + super.greeting();
//     }
// }
// let c = new Cat('Tom');
// console.log(c.greeting());
