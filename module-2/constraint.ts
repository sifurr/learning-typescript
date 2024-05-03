{

    interface Student {
        id: number;
        name: string;
        email: string;
    }
    
    // constraints enforce the functions to have at least 3 properties such as
    // id, name, email
    // and we do it by extending generic type T with Student interface 
    const addCoursesForStudent = <T extends Student>(student: T) => {
        const course = "Mathematics";

        return {
            ...student,
            course
        }
    }

    const student1 = addCoursesForStudent({
        id: 1,
        name: "John",
        email: "john@email.com",
        taken: false
    });

    const student2 = addCoursesForStudent({
        name: "Jenny",
        email: "jenny@email.com",
        id: 2,
        dob: 2000
    });
}