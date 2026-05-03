type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void{
    if(role === 'admin'){
        console.log('redirecting to admin board');
        return
    }
    if(role === 'user'){
        console.log('redirecting to admin board');
        return
    }
    // (parameter) role: never (on however)
    // this value is never accessed 
    // type Role = "admin" | "user"; in future -> type Role = "admin" | "user" | "superadmin";

    // we however and check if it is never all the cases are handled
    role;
}


// it returns never 
// contantly running
function neverReturn(): never{
    while(true){

    }
}