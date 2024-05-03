{
    type Person = {
        name: string;
        age: number;
        email?: string;
        contact: string;
    }
    
    
    // pick type
    type Name = Pick<Person, "name" | "age">; // pick name from Person

    // omit type
    type ContactInfo = Omit<Person, "name" | "age">;

    // required type
    type PersonRequired = Required<Person>;

    // partial type  -- it makes all properties optional
    type PersonPartial = Partial<Person>;

    // Read only type
    type PersonReadonly = Readonly<Person>;

    // Record
    type MyObj = Record<string, string>;
    const obj1: MyObj = {
        a: 'ss',
        b: 'dd',
        d: 'ee'
    }

    const EmptyObj : Record<string, unknown> = {};

}