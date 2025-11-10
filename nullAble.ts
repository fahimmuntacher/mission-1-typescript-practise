const getUser = (user : string | null) => {
    if(user){
        return `user is ${user}`
    }else{
        return "All use from DB"
    }
}

// console.log(getUser(null));

// unknown Type