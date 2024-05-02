{

    // two types of functions
    // normal function
    // arrow function

    // normal function
    function add(num1: number, num2: number = 20): number {
        return num1 + num2;
    }

    // arrow function
    const addArrow = (num1: number, num2: number): number => num1 + num2;

    // object --> method
    const poorUser: {
        name: string;
        balance: number;
        addBalance(balance: number): string;
    } = {
        name: "John",
        balance: 0,
        addBalance(balance: number): string {
            return `This is my balance: ${this.balance + balance}`;
        }
    }


    // call back function 
    const arr: number[] = [2, 4, 8];
    const newArray: number[] = arr.map((item: number): number => item * item);


}