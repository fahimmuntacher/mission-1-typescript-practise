// polymorphism : bohurupi 
class Person {
    getSleep(){
        console.log(`Normal person sleep for 8 hrs`);
    }
}

class Student extends Person {
    getSleep(): void {
        console.log(`Student sleep for 6 hrs`);
    }
}

class NextLevelDev extends Person{
    getSleep(): void {
        console.log(`Next level developer sleep for 4 hrs`);
    }
}

const getSleepingHrs = (param: Person) => {
    param.getSleep()
}

const person1 = new Person();
const student = new Student();
const NextLevelDeveloper = new NextLevelDev();

getSleepingHrs(person1)
getSleepingHrs(student)
getSleepingHrs(NextLevelDeveloper)


class Shape {

}