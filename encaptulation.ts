class BankAccount {
  readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance : number) {
    this.userBalance += balance;
  }
}

class StudentBankAcc extends BankAccount{
    test(){
        this.userBalance
    }
}


const FahimAcc = new BankAccount(20, "Fahim", 25000);

FahimAcc.addBalance(2000)
console.log(FahimAcc);
