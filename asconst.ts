// as constant 


// enum UserRoles {
//     Admin = "Admin",
//     User = "User"
// }

const userRole = {
    Admin : "ADMIN",
    User : "USER"
} as const;

const canEdit = (role : typeof userRole[keyof typeof userRole]) => {
    if(role === userRole.Admin || role === userRole.User){
        return "Youre an admin also an user"
    } else {
        return false
    }
}

console.log(canEdit(userRole.Admin));