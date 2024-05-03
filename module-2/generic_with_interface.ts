{
    // Generic with interface
    interface Developer<T, X=null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bicycle?: X;
    }


    // usage with Interface
    interface SmartWatch1 {
        brand: string;
        model: string;
        pulseTracking: boolean;
        sleepTracking: boolean;
    }

    interface Bicycle {
        brand: string;
        year: number;
    }

    const developer1: Developer<SmartWatch1, Bicycle> = {
        name: "John",
        computer: {
            brand: "Asus",
            model: "33A",
            releaseYear: 2020
        },
        smartWatch: {
            brand: "Ipel",
            model: "58i",
            pulseTracking: true,
            sleepTracking: true,
        },
        bicycle: {
            brand: "Duranta",
            year: 2022
        }
    }

    // usage with Type Alias
    type SmartWatch2 = {
        brand: string;
        model: string;
        display: string;
    }

    const developer2: Developer<SmartWatch2> = {
        name: "John",
        computer: {
            brand: "HP",
            model: "343H",
            releaseYear: 2018
        },
        smartWatch: {
            brand: "Apple",
            model: "888p",
            display: "OLED"
        }
    }

}