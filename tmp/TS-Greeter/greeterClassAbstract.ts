abstract class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract greeting();
}

class Cat extends Animal {
    public greeting() {
        console.log(`Meow, I am ${this.name}`);
    }
}

let cat = new Cat('Coco');
cat.greeting();