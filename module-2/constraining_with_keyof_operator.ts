{
    // 
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner1 = "bike" | "car" | "ship"; // creating Union manually
    type Owner2 = keyof Vehicle; // creating Union with keyof operator

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) =>
    {
        return obj[key];
    };

    const user = {
        name: "John",
        age: 33,
        address: "Barishal"
    };

    const result1 = getPropertyValue(user, 'name');
}