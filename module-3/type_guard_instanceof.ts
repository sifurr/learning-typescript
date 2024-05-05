{
    // type guard with instanceof operator

    class Animal {
        public name: string;
        public species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        canSound() {
            console.log(`This is ${this.name}'s sound`);
        }
    };

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        canBark() {
            console.log("I am barking!");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        canMeow() {
            console.log("I am meowing!");
        }
    }

    // without extra check
    const getAnimalSound1 = (animal: Animal) => {
        if (animal instanceof Dog) {
            animal.canBark();
        }
        else if (animal instanceof Cat) {
            animal.canMeow();
        }
        else {
            animal.canSound();
        }
    };



    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    // with extra check
    const getAnimalSound2 = (animal: Animal) => {
        if (isDog(animal)) {
            animal.canBark();
        }
        else if (isCat(animal)) {
            animal.canMeow();
        }
        else {
            animal.canSound();
        }
    };

    const dog = new Dog("Tommy", 'dog');
    const cat = new Cat("Billi", 'cat');

    getAnimalSound1(dog);
    getAnimalSound2(cat);

}