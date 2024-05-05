{
    class Person {
        public name: string;
        public age: number;
        public address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleepTime(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours} hours`);
        }
    }


    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            // send these 3 arguments to the person as 
            // person is initializing those 3 variables
            super(name, age, address);
        }
    }

    const student1 = new Student("Laallu", 19, "Rangamati");
    student1.getSleepTime(8.5);


    class Teacher extends Person {
        public designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            // send these 3 arguments to the person as 
            // person is initializing those 3 variables
            super(name, age, address);
            this.designation = designation;
        }   
        takeClass(numOfClass: number) {
            console.log(`${this.name} sir will take ${numOfClass} classes`);
        }
    }

    const teacher1 = new Teacher("Jhalu", 69, "Gofor Gaon", "Prodhan Shikkhok");
    console.log();
    console.log(teacher1.designation);
    teacher1.takeClass(2);
    
}