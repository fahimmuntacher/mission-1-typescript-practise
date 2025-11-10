function addNormal (num1 : number, num2 : number) : number {
    return num1 + num2; 
}

addNormal(1, 2);

const addArrow = (num1 : number, num2 : number) : number=> num1 + num2;
addArrow(1, 2)

// object => function => method

const poorUser = {
    name : "Fahim", 
    balance : 0,
    addBalance(value : number) : number{
        const totalBalance = this.balance + value;
        return totalBalance
    }
}


console.log(poorUser.addBalance(5));