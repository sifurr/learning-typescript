{
    //Never,Unknown And Nullable Type

    // nullable type
    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching");
        } else {
            console.log("There is nothing to search");
        }
    }
    searchName(null)


    // unknown types  -- with this type we can check it on runtime and take our decision
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        else if (typeof value === 'string') {
            const [val, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(val) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else{
            console.log("Wrong input");            
        }
    }

    getSpeedInMeterPerSecond(`1000 kmh^-1`);


    // never  - there are somethings that will never return anything,
    // on that case we can declare its type never explicitly
    const throwError = (msg: string) : never => {
        throw new Error(msg);
    }

    throwError("Mushkilse error ho gaye");


}