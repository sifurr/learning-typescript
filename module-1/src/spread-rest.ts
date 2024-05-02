{
    // spread operator
    // rest operator

    // spread operator
    const bros1: string[] = ["John", "Ron", "Lon"];
    const bros2: string[] = ["Vaughn", "Kon", "Don"];

    bros1.push(...bros2)

    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan"
    }

    const mentors2 = {
        prizma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid"
    }

    const mentorsList = {
        ...mentors1,
        ...mentors2
    }

    // rest operator

    const greetFriends = (...friends : string[]) : void => {
        // return `Hello ${friends[0]} ${friends[1]} ${friends[1]}`;
        friends.forEach((friend : string ) =>  console.log(`Hi ${friend}`))
    }


}