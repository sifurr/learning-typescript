{
    //

    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async () : Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        
        return data;
        // console.log(data);
    }

    getTodo();


    // Promise Basics
    // Simulate
    const createPromise = (): Promise<string> => {

        return new Promise<string>((resolve, reject) => {
            const data: string = "something";
            // const data: string = null;
            if (data) {
                resolve(data);
            } else {
                reject('Failed to load data');
            }
        })
    }

    // calling that createPromise function
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        return data
        // console.log(data);
    }

    showData();




}