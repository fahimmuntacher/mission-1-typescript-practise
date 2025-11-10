//  intersection => &

type Employee  = {
    id: string,
    name : string,
    phoneNo : string
};

type Manager = {
    designation : string
    teamSize : number
}

type EmployeeManager = Employee & Manager;

const intersection : EmployeeManager = {
    id: "01",
    name: "Fahim",
    phoneNo: "016122",
    designation: "manager",
    teamSize: 20
} 

console.log(intersection);