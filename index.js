class Cat {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says meow!`
    }
}

let cat = new Cat("Ollie", "male")

class Dog {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says woof!`
    }
}

let dog = new Dog("Alice", "female")

class Bird {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        if(this.sex === "male") return `It's me! ${this.name}, the parrot!`
        if(this.sex === "female") return `${this.name} says squawk!`
    }
}

let boyBird = new Bird("Georgie", "male")
let ladyBird = new Bird("Polly", "female")



