{
    // mapped type


    // map review
    const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

    const arrayOfString: string[] = arrayOfNumbers.map(item => item.toString());

    console.log(arrayOfString);

    type AreaNumber = {
        height: number;
        width: number;
    }

    type HeightArea = AreaNumber['height']; // lookup type

    type AreaString1 = {
        [key in keyof AreaNumber]: string;
    }

    type AreaString2<T> = {
        [key in keyof T]: T[key];
    }

    const area1: AreaString2<{height: number; width: number}> = {
        height: 33,
        width: 99
    }
}