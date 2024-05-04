{
    // basics of class

    class Animal {
        // constructor with parameter properties
        constructor(public name: string, public species: string, public sound: string) { }

        // method
        makeSound()
        {
            console.log(`The ${this.name} sounds ${this.sound}`);            
        }
    }

    const dog = new Animal("Kallu", "Kukur", "Ghew ghew");
    const cat = new Animal("Pillu", "Biral", "Meow meow");

    dog.makeSound();
    cat.makeSound();
}