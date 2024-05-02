{
    // object destructuring
    const user = {
        id: 343,
        name: {
            firstName: "John",
            middleName: "G.",
            lastName: "Doe"
        },
        contact: "018000000000",
        address: "Africa"
    }

    const { address, name: { middleName } } = user;

    // array destructuring
    const myFriends: string[] = ["John", "Lon", "Don", "Kon", "Mon"];
    // this will exclude first two friends John and Lon, then it will get Don as 
    // best friend, and then it will have last two friends in the list with rest operator
    const [, , bestFriend, ...restFriends] = myFriends;
}