// Non Primitive = "Array", "Object"

let bazarList = ["milk", "sugar", "salt"];
bazarList.push("15")
bazarList.push(true)

let mixedArray : (string | number)[] = ["milk", 5, "sugar", 10, "salt", 3];
mixedArray.push(true)

// typescript special method - tuple

let coordinate : [number, number] = [1, 2]

let couple : [string, string] = ["X", "Y"];

let destination : [string, string, number   ] = ["Dhaka", "Chandpur", 3]

// reference type : object 

const user : {
   readonly organization: "Mayer Hotel",  // access modifier
    firstName : string,
    middleName ?: string, // ? -> it's means optional, u can add it or not 
    lastName : string,
    isMarried : boolean,
} = {
    organization : "Mayer Hotel",
    firstName : "Fahim",
    middleName : "Something",
    lastName : "Muntasir",
    isMarried : false
}

// user.organization = ("Nijer hotel");
console.log(user);

// const user : {
//     organization: "Mayer Hotel", // value => type : literal type, it'll not change
//     firstName : string,
//     middleName ?: string, // ? -> it's means optional, u can add it or not 
//     lastName : string,
//     isMarried : boolean,
// } = {
//     organization : "Mayer Hotel",
//     firstName : "Fahim",
//     middleName : "Something",
//     lastName : "Muntasir",
//     isMarried : false
// }

// user.organization = ("Nijer hotel");
// console.log(user);