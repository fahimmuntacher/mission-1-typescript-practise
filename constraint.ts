// constraint : strict rules

type Student = {
  id: number;
  name: string;
};

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Fahim",
  hasEnrolled: true,
};

const student2 = {
  id: 234,
  name: "Muntasir",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id: 125,
  name: "fahim",
  hasEnrolled: false,
};

console.log(addStudentToCourse(student3));
