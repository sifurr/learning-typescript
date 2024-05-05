{
    // abstraction with : 1. Interface, 2. Abstract keywords

    interface IVehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car1 implements IVehicle1 {

        public startEngine(): void {
            console.log("Starting the car...");
        }

        public stopEngine(): void {
            console.log("Journey is over, stopping the car!");
        }

        public move(): void {
            console.log("Moving the car to the southward....>");
        }

        public extraMethod(): void {
            console.log("This extra method is just for a test");
        }
    }


    const car1 = new Car1();
    car1.startEngine();
    car1.move();
    car1.stopEngine();


    // Abstract class
    abstract class Car2 {
        public abstract startEngine(): void;
        public abstract stopEngine(): void;
        public abstract move(): void;
        
        public extraMethod(): void {
            console.log("This extra method is just for a test");
        }
    }

    class TeslaCar extends Car2 {

        public startEngine(): void {
            console.log("Starting the car...");
        }

        public stopEngine(): void {
            console.log("Journey is over, stopping the car!");
        }

        public move(): void {
            console.log("Moving the car to the southward....>");
        }        
    }

    const car2 = new TeslaCar();
    car2.startEngine();
    car2.move();
    car2.stopEngine();

}