// typeAllias
type user = {
    name: string;
    age: number
};



interface Iuser {
    name : string,
    age: number
}

type Role = {
    role : "admin" | "user"
}
// interseciton
type userWithRole = user & Role;

// interface 
interface IuserWithRole extends Iuser{
    role : "admin" | "user"
}

const user1 : IuserWithRole = {
    name : "Fahim",
    age: 20,
    role: "admin"
   
}
// console.log(user1);


// function 

type add = (num1 : number, num2: number) => number;
interface IAdd {
    (num1 : number, num2: number) : number
}

const add : IAdd = (num1, num2) => num1 + num2

