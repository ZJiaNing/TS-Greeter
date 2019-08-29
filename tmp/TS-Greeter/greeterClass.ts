// 0
class Animal {
    constructor(name: string) {
        this.name = name;
    }

    static isAnimal(a) {
        return a instanceof Animal;
    }

    greeting() {
        return `I am a ${this.name}`; 
    }

    get name() {
        return 'Jack';
    }
    set name(value) {
        console.log('setter: ' + value);
    }
}

let animal = new Animal('Cat');
console.log(animal.greeting());


// extends
class Cat extends Animal {
    constructor(name: string) {
        super(name);
        console.log(this.name);
    }

    greeting() {
        return 'Meow, ' + super.greeting();
    }
}

let c = new Cat('Tom');
console.log(c.greeting());