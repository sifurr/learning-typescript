// Reference types --> Object

let user: {
    company: "Programming Hero"; // type --> literal types
    firstName : string;
    middleName ?: string; // optional type
    lastName : string;
    readonly birthYear: number;
    isMarried: boolean;
} = {
    company: "Programming Hero",
    firstName: "Jhankar",   
    lastName: "Mahbub",
    birthYear: 1980,
    isMarried: true,
}
