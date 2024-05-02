{

    // ternary operator || optional chaining operator || nullish coalescing

    const age: number = 18;

    if (age >= 18) {
        console.log("Adult");
    }else{
        console.log("Not adult");        
    }


    // ternary
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log(isAdult);   

    
    // nullish coalescing operator
    // if any decision needs to make based on null or undefined
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? "Guest";  // nullish coalescing operator ?? --> if isAuthenticated is null or undefined then set the Guest as default value
    console.log(result1);
    
}