{
    // basics of class

    class Animal {

        // properties
        name: string;
        species: string;
        sound: string;

        // constructor
        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

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