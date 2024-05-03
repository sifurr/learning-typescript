{
    // generic

    type GenericType<T> = Array<T>;

    // const rollNumbers: number[] = [2, 4, 6];
    // const rollNumbers: Array<number> = [2, 4, 6];
    const rollNumbers: GenericType<number> = [2, 4, 6];

    // const teachers: string[] = ["Mr. X", "Mr. Y", "Ms. Z"];
    // const teachers: Array<string> = ["Mr. X", "Mr. Y", "Ms. Z"];
    const teachers: GenericType<string> = ["Mr. X", "Mr. Y", "Ms. Z"];

    // const boolArray: boolean[] = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
    const boolArray: GenericType<boolean> = [true, false, true];


    // verbose
    const user1: GenericType<{ name: string, age: number }> = [
        {
            name: "John",
            age: 55
        },
        {
            name: "Jane",
            age: 45
        },
    ]

    interface User {
        name: string;
        age: number;
    }

    // clean code
    const user2: GenericType<User> = [
        {
            name: "John",
            age: 55
        },
        {
            name: "Jane",
            age: 45
        },
    ]


    // generic tuple
    type GenericTuple<X, Y> = [X, Y];
    const couple: GenericTuple<string, string> = ["Mr. X", "Ms. Y"];
    const userWithId: GenericTuple<number, { name: string, email: string }> = [1234, { name: "John", email: "john@email.com" }]

}