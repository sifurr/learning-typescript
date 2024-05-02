{
    type Student = {
        name: string;
        age: number;
        gender: string;
        contact?: string;
        address: string;
    }

    const student1: Student = {
        name: "John",
        age: 20,
        gender: "male",
        address: "Uganda"
    }

    const student2: Student = {
        name: "Vaughn",
        age: 19,
        gender: "male",
        address: "Europe"
    }

    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = "John";
    const admin : IsAdmin = false;

    // type alias for function
    type Add = (x : number, y : number) => number;
    const add : Add= (num1, num2) => num1 + num2;
}