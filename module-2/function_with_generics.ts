{
    // generics
    const createArray = (param: string): string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const arr1 = createArray("Ghana");
    const arrGeneric1 = createArrayWithGeneric<string>("Africa");

    interface Person {
        id: number;
        name: string;
    }
    const arrGeneric2 = createArrayWithGeneric<Person>({ id: 12, name: "Lulu" });


    const createArrayWithGenericAndTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }

    const arrGenericAndTuple1 = createArrayWithGenericAndTuple<string, number>("Laallo", 25);

    interface Person {
        id: number;
        name: string;
    }
    const arrGenericAndTuple2 = createArrayWithGenericAndTuple<string, Person>("Bangladesh", { id: 23, name: "Dulu" });


    // 
    const addCoursesForStudent = <T>(student: T) => {
        const course = "Mathematics";

        return {
            ...student,
            course
        }
    }

    const student1 = addCoursesForStudent({name: "John", email:"john@email.com", taken: false});
    
    const student2 = addCoursesForStudent({name: "John", email:"john@email.com", dob: 2000});







}