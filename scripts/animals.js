class Animal {
    constructor(name) {
        this.name = name;
        console.log('Hello World')
    }
}


Animal.prototype.speak = function (test) {
    console.log(`${this.name} makes a noise.`);
}

Animal.prototype.sleep = function () {
    console.log(`${this.name} going to bed.`);
}


let animal = new Animal('animal');
animal.speak()


// Dog
class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }
}

// Cat
class Cat extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }
    

    speak() {
        console.log(`${this.name} knurre.`);
    }
}

const d = new Dog('Mitzie');
const c = new Cat('Trine');
d.speak(); // Mitzie barks.
c.speak(); // Mitzie barks.
c.sleep()