{
    // type assertion
    let anything: any;
    anything = "This is a string";

    let string_length: number = (anything as string).length;

    const kgToGm = (value: string | number) : string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue;
        }
        if (typeof value === 'number') {
            const convertedValue = value * 1000;
            return convertedValue;
        }
    }

    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string;
    
}