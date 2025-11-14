enum UserRoles {
    Admin = "Admin",
    User = "User"
}

const canEdit = (role : UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.User){
        return "Youre an admin also an user"
    } else {
        return false
    }
}

console.log(canEdit(UserRoles.Admin));