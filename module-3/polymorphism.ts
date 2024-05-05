
{
    // polymorphism  --> সহজ ভাষায়, স্থান, কাল, পাত্রভেদে চেঞ্জ হয়ে যাওয়াই পলিমরফিজম। 

    class Person {
        public takeSleep(): void {
            console.log("I sleep 8 hours everyday");
        }
    }

    class Student extends Person {
        public takeSleep(): void {
            console.log("I sleep 7 hours everyday");
        }
    }

    class Developer extends Person {
        public takeSleep(): void {
            console.log("I sleep 6 hours everyday");
        }
    }


    const getSleepingHours = (param: Person) => {
        param.takeSleep();
    }


    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();


    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);


    // another example
    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {
        public radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }

        // pi*r*r
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape {
        public height: number;
        public width: number;
        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }

        // pi*r*r
        getArea(): number {
            return Math.PI * this.height * this.width;
        }
    }


    const getShapeArea = (param: Shape): void => {
        console.log(param.getArea().toFixed(2))
    }

    const shape = new Shape();
    const circle = new Circle(10);
    const rect = new Rectangle(20, 30);
    
    getShapeArea(shape);
    getShapeArea(circle);
    getShapeArea(rect);

}