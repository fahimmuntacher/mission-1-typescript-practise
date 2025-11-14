// oop: instance of typeguard/ type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doHomeWork(numOfHours: number) {
    console.log(`${this.name} is doing homework for ${numOfHours} hrs`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  doTeaching(numOfSubs: number) {
    console.log(`${this.name} sir taking ${numOfSubs} subs in a day`);
  }
}

// function gurard 
const isStudent = (user : Person) => {
   return user instanceof Student;
}

console.log(isStudent);
const getUserInfo = (user: Person) => {
    if(isStudent(user)){
        user.doHomeWork(20)
    }else if(user instanceof Teacher){
        user.doTeaching(10)
    }else{
        user.name
    }
};

const student1 = new Student("Mr Fahim");
const teacher1 = new Teacher("Mr Muntasir");

getUserInfo(teacher1)
getUserInfo(student1)