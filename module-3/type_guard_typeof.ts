{
    // type guard (type narrowing with typeof operator)

    type AlphaNumeric = number | string;

    const add = (num1: AlphaNumeric, num2: AlphaNumeric): AlphaNumeric => {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 + num2;
        } else {
            return num1.toString() + num2.toString();
        }
    }

    const res = add(2, 2);
    console.log(res);

    // in guard
    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user: NormalUser | AdminUser): void => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and the role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser = {
        name: 'John'
    };
    const adminUser = {
        name: 'Adam',
        role: 'Admin'
    };

    getUser(normalUser);
    console.log('\n');
    getUser(adminUser);

}