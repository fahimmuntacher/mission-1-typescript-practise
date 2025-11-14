// generic function

// const createArrSting = (value : string) => {
//   return [value]
// }

// const createArrNum = (value : number) => {
//    return [value]
// }

// const createArrWihtObj = (value : {
//     id: number, name:string
// }) => {
//     return [value]
// }

const createArrWithGeneric = <T>(value: T) => {
  return [value];
};

// tuple
const createArrWithTuple = (value1: number, value2: string) => {
  return [value1, value2];
};

const createArrWithGenericTuple = <X, Y>(value1: X, value2: Y) => {
  return [value1, value2];
};

const addStudentToCourse =  <T>(studentInfo : T) => {
    return {
        course : "Next Level", 
        ...studentInfo
    }
}

const student1 = {
    id: 123,
    name: "Fahim",
    hasEnrolled : true
}

const student2 = {
    id: 234,
    name: "Muntasir",
    hasCar : true,
    isMarried : true
}


console.log(addStudentToCourse(student2));
console.log(createArrWithTuple(1, "Fahim"));
console.log(createArrWithGenericTuple(20, 10));
console.log(createArrWithGeneric({ id: 1, name: "Fahim" }));
