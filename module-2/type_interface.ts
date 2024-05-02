{
    // type alias
    type User1 = {
        name: string;
        age: number;
    }

    // interface
    interface User2 {
        name: string;
        age: number;
    }



    type rollNumber = number;

    // extending type with intersection type
    type UserWithRole1 = User1 & {
        role: string
    };

    const user1: User1 = {
        name: "Jane",
        age: 45
    }

    const user3: UserWithRole1 = {
        name: "John",
        age: 50,
        role: "manager"
    }



    // extending with interface
    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user2: User2 = {
        name: "Jane",
        age: 45
    }

    const user4: UserWithRole2 = {
        name: "Jenny",
        age: 22,
        role: "student"
    }


    // usage 
    // object is object, array and function are also object in javascript
    // that means we can also use interface here 

    // using type for array
    type Roll1 = number[];
    const rollNumber1: Roll1 = [2, 5, 6]; // using type alias

    // using interface for array
    interface Roll2 {
        [index: number]: number;
    }
    const rollNumber2: Roll2 = [2, 5, 6]; // using interface

    // using type for function
    type Add1 = (num1: number, num2: number) => number;
    const add1: Add1 = (num1, num2) => num1 + num2;

    // using interface for function
    interface Add2 {
        (num1: number, num2: number): number; // here we can't use = sign for return type like Type Alias
                                                // instead we have to use : sign for return type
    }
    const add2: Add2 = (num1, num2) => num1 + num2;

}