{

    // Union type with string literal 
    type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper";
    type FullStackDeveloper = "FronendDeveloper" | "ExpertDeveloper";
    
    const newDeveloper : FrontendDeveloper = "FakibazDeveloper";
    
    type Developer = FrontendDeveloper | FullStackDeveloper;
    

    type User = {
        name : string;
        age ?: number;
        gender: "Male" | "Female";
        blood: "A+" | "A-" | "B+" | "B-" | "O+" | "O-";
    }

    const newUser: User = {
        name: "John",
        gender: "Male",
        blood: "B+"        
    }


    // intersection types
    type FrontendEngineer = {
        skills: string[];
        designation1: 'Frontend Engineer';
    }
    type BackendEngineer = {
        skills: string[];
        designation2: 'Backend Engineer';
    }

    type FullStackEngineer = FrontendEngineer & BackendEngineer;
    
    const fullStackEngineer : FullStackEngineer = {
        skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
        designation1: "Frontend Engineer",
        designation2: "Backend Engineer"
    }
}