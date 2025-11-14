// getter
class BankAccount {
  readonly userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  //   setting balance
//   addBalance(balance: number) {
//     this.userBalance += balance;
//   }
  set addBalance(balance: number) {
    this.userBalance += balance;
  }

  //   get balance
//   getBalance(){
//     return this.userBalance;
//   }

 get getBalance(){
    return this.userBalance;
  }
}

const FahimAcc = new BankAccount(20, "Fahim", 245);

// FahimAcc.addBalance(500); //have to call function

// console.log(FahimAcc.getBalance()); // have to call function
FahimAcc.addBalance = 100;
FahimAcc.addBalance = 100;

console.log(FahimAcc); 
