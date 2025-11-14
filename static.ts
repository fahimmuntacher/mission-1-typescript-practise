class Counter {
    static count : number = 0;
    increament(){
        return Counter.count += 1;
    }
    decreament(){
        return Counter.count -= 1;
    }
}

const increamentNew = new Counter()
console.log(increamentNew.increament());
console.log(increamentNew.increament());
console.log(increamentNew.increament());
// output: 1 2 3
const instance2 = new Counter()
console.log(instance2.increament());
// output: 1 2 3 4