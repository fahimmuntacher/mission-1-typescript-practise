// keyof operator : type operator 

type RichPeople = {
    bike: string,
    car: string,
    jet : string

}

type MyVehicle1 = "bike" | "car" | "cng";

type myVehicle2 = keyof RichPeople;

const myVehicle : myVehicle2= "bike" 

type User = {
    id: number,
    name: string,
    address: {
        city: string,
        upazilla: string
    }
}

const user = {
    id: 123,
    name: "Fahim",
    address: {
        city: "Chandpur",
        upazilla: "Shahrasti"
    }
}

const product = {
    brand: "Yamaha",
    type: "Honda"
}

// // const userId = user.id;
// const userId = user["id"];
// const userName = user["name"];
// const userAddress = user["address"];
// console.log({userId, userName, userAddress});

const getPropertyFromObj = (obj: User, key: keyof User) => {
    return obj[key]
}



const getPropertyFromObjGen = <X,>(obj: X, key: keyof X) => {
    return obj[key]
}

console.log(getPropertyFromObjGen(user, "address"));

console.log(getPropertyFromObjGen(product, "brand"));