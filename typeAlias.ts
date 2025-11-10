type User = {
    id: string, 
    name : {
        firstName : string,
        lastName : string
    },
    phone: string,
    address : {
        division : string,
        city : string,
        postalCode : string
    }
} 

const user1 : User = {
    id: "1", 
    name : {
        firstName : "Fahim",
        lastName : "Muntasir"
    },
    phone: "01612167862",
    address : {
        division : "Chattogram",
        city : "Chandpur",
        postalCode : "3620"
    }
}
console.log(user1);

// typeAlia use in function
type AddFunc = (num1 : number, num2 : number) => number;

const addNums : AddFunc = (num1, num2) => {
    return num1 + num2;
}