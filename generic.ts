// dynamically generalize 

// type genericArr<value> = Array<value>
type genericArr<T> = Array<T>


// const friends: string[] = ["x", "y", "z"];
const friends: genericArr<string> = ["x", "y", "z"];
// const numbers: number[] = [0, 1, 2];
const numbers: genericArr<number> = [0, 1, 2];

const userList : genericArr<{name: string, age: number}> = [
    {
        name: "Fahim",
        age: 20
    },
    {
        name: "Muntasir",
        age: 25,
    }
]
